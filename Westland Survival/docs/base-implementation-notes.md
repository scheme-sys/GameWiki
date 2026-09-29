# 基地实现说明（维护资料）

这些原始实现细节已从面向玩家的页面移至此处。本文不包含在 GitHub Pages 发布产物中。

## doc-original-flow

```html
<section class="section" id="doc-original-flow" aria-labelledby="doc-original-flow-title">
  <div class="section-head"><p class="kicker">原版事实</p><h2 id="doc-original-flow-title">付银币揭露，不等于当场生成整座基地</h2></div>
  <ol class="steps">
    <li><strong>选择地图位置与基地模板。</strong>筛选空槽与候选，创建 <code>EnemyBaseData</code>，写入 <code>LocationId</code>、随机名字和访问状态，再揭露地图。这里没有房屋、守卫和箱子字段。</li>
    <li><strong>进入加载流程，先找既有实例。</strong><code>GlobalMapModel.ReloadOrGenerateLocation</code> 查询已有位置实例；找到就走 <code>PrepareLocationModelFromState</code>，不是每次进入都重新抽取。</li>
    <li><strong>没有实例才执行生成。</strong><code>GlobalMapLocationsModel.GenerateLocation</code> 创建 <code>LocationGeneratedData</code> 与 <code>BuilderData</code>，经 <code>LocationModel.Generate</code> 调用 <code>LocationDescription.Generate</code>，展开模板中的布局与对象生成节点。</li>
    <li><strong>生成后的变化单独持久化。</strong>墙门、家具与建筑状态归 <code>BuilderData</code>；角色、战利品对象、拖动箱、触发器、种子与版本归 <code>LocationGeneratedData</code>。离开后再进入，应恢复这份实例状态。</li>
  </ol>
  <div class="grid2">
    <div class="panel"><h3>实际资源结构</h3><p><code>locations.enemy_01_rework</code> 是版本入口，例如指向版本 6、7；具体 <code>enemy_01_rework__v7</code> 包含 <code>serializable: true</code>、<code>seed: -1</code> 与压缩生成树。</p><p>生成树引用 <code>content.enemy_base.topology_t1</code> 等点分地址；实际 <code>location_gen_nodes</code> JSON 键为 <code>content_enemy_base_topology_t1</code> 等，并有 <code>gen_node_name</code>。本次检查没有发现名为 <code>location_templates</code> 的根表，不能把概念名当成真实字段。</p></div>
    <div class="panel"><h3>“随机”的准确含义</h3><p>原版是<strong>预设布局模块＋条件筛选、权重、旋转和带种子抽取</strong>，不是任意创造房屋。已有六个区域层级的拓扑节点，各含三种变体；墙门、家具与防御节点再组合。守卫按区域条件选择，部分箱子使用独立掉落概率。</p></div>
  </div>
  <p class="muted">证据：本地原始 R14、托管元数据与原生调用 0x3B6115C → 0x3B5F0B4 → 0x3916730 → 0x3B053FC。揭露函数本身不生成建筑；未穷举其他预加载入口。</p>
</section>
```

## doc-persistence

```html
<section class="section" id="doc-persistence" aria-labelledby="doc-persistence-title">
  <div class="section-head"><p class="kicker">实例生命周期</p><h2 id="doc-persistence-title">锁定一座基地，再让所有进出与保存围绕它工作</h2></div>
  <p><span class="proposal">提案</span> 新增独立的 <code>BaseEncounterSpec</code> 配置与实例索引；保留原版 <code>EnemyBaseData</code> 的身份和生命周期用途，不把大量自定义字段随意塞入它。通过唯一实例 ID、地图槽和原版位置记录关联到 <code>LocationData</code>。</p>
  <div class="table-wrap"><table><caption>需要持久化的最小信息分组</caption><thead><tr><th>信息</th><th>建议字段</th><th>作用</th></tr></thead><tbody>
    <tr><td>身份与版本</td><td><code>encounterId / operationId / mapSlotId / locationId / seed / configVersion</code></td><td>让交易、地图记录与实体内容指向同一座基地；种子之外还锁配置版本，更新程序不改变旧实例。</td></tr>
    <tr><td>生成条件</td><td><code>region / regionTier / difficulty / templateId / templateVersion / theme</code></td><td>揭露时确定，新难度和后续升级不会改写已买基地。</td></tr>
    <tr><td>内容账本</td><td><code>resourceBudget / inventoryLedger / defenderLedger / equipmentLedger / lootLedger</code></td><td>保存预算分配、具体库存、角色与装备、尸体掉落结果，防止重进增殖或降级。</td></tr>
    <tr><td>生命期与恢复</td><td><code>state / saveRevision / transactionState / corpseReferences / endedReason</code></td><td>明确生成、提交、死亡与结束状态；只恢复这一笔操作，不回滚玩家其他进度。</td></tr>
  </tbody></table></div>
  <p class="code">RESERVED → REVEALED → GENERATED / ACTIVE → SAVED → ENDED</p>
  <p class="muted">以上是方案状态名，不是声称原版存在同名枚举。正常离开是 ACTIVE → SAVED，回来可 SAVED → ACTIVE；ENDED 才释放地图容量，SAVED 不等于打完或自动回收。</p>
  <p><strong>新实例没有强制清理倒计时。</strong>本方案新生成的增强基地，以及采用便利揭露流程的新简单基地，不自动在 1 小时后消失；图内也不因计时到期强制清理。退图后由玩家按安全条件手动确认结束。此规则不追溯改写更新前已生成基地的既有计时与生命周期。</p>
  <div class="grid2"><div class="panel"><h3>死亡进入 CORPSE_PENDING</h3><p>死亡后记录尸体归属与位置，保护基地入口和实例，复活后可以返回取回物品。清理流程遇到该状态必须停止，不能因为玩家死了、守卫死光或揭露冷却结束就回收地图。</p><p>尸体相关状态应与实例保存一起核对；尸体是否存在不确定时，宁可保留槽位并提示，也不能当作没有尸体处理。</p></div><div class="panel"><h3>结束必须是一项明确操作</h3><p>仅在玩家已在图外、没有待取回尸体、最近实例保存已确认时允许结束。二次确认明确提示：<strong>“结束后未带走的物品会被丢弃，基地将从地图移除。是否继续？”</strong></p><p>确认后只清理该实例拥有的地图记录与生成数据并释放槽位；不删其他基地、家园、联盟或玩家背包。所有守卫死亡不是自动结束条件。</p></div></div>
  <div class="note">无限攻打指安全结束后连续开启下一座，不是已抢空的基地重进就回满；不能靠反复清实例规避正确保存。</div>
</section>
```

