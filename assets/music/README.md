# 背景音乐录音来源与许可

本目录收录肖邦《降 E 大调夜曲，Op.9 No.2》和贝多芬《月光奏鸣曲》完整三个乐章。没有续播记录时，两组等概率随机选择；每组播完后再随机选择下一组。月光组内部保持 `moonlight-1.mp3` → `moonlight-2.mp3` → `moonlight-3.mp3`，不在乐章间插入其他作品。

## 肖邦《降 E 大调夜曲，Op.9 No.2》

- 网站文件：`chopin-nocturne-op9-no2.mp3`。
- 来源：[Wikimedia Commons 文件页](https://commons.wikimedia.org/wiki/File:Nocturne_Op._9_no._2_in_E_flat_major.mp3)，页面将录音来源指向 Musopen / Internet Archive，并标注录音文件为 CC0 1.0。
- [原始 MP3](https://upload.wikimedia.org/wikipedia/commons/5/50/Nocturne_Op._9_no._2_in_E_flat_major.mp3)。2026-10-02 下载；按原字节保存，没有再次有损转码。
- 时长：276.648 秒（约 4:37）；大小：5,354,496 字节；MP3，平均码率约 155 kbps。已通过 FFprobe 和 FFmpeg 完整解码。
- 文件页没有明确演奏者，播放器显示肖邦与 Musopen 来源，不将月光奏鸣曲的钢琴演奏者署名套用到此曲。
- SHA-256：`d6a289cd51123f0033fb6e4014277495340c6d3afa3a4e42e7cd89bcf634d917`。

## 贝多芬《月光奏鸣曲》

《第 14 钢琴奏鸣曲，升 C 小调，作品 27 第 2 号》的三个乐章：

- 作曲：Ludwig van Beethoven（路德维希·凡·贝多芬）。
- 钢琴演奏：Paul Pitman。
- 录音提供方：[Musopen](https://musopen.org/)。
- 下载与许可核验日期：2026-09-29。

## 录音许可

许可依据包含**现代录音本身**的公开授权，不仅是贝多芬作品已经进入公有领域。

[IMSLP 的作品页面](https://imslp.org/wiki/Piano_Sonata_No.14,_Op.27_No.2_(Beethoven,_Ludwig_van))将 Paul Pitman 演奏、Musopen 提供的三个录音（文件编号 354249、354250、354251）统一标为 **Public Domain (dedicated)**。

下列 Wikimedia Commons 文件页还分别列出作品与录音的状态：第一乐章录音由 musopen.com 发布至全球公有领域，第二、第三乐章由 Paul Pitman 发布至全球公有领域；在无法直接放弃相关权利的地区，页面同时给出不附加条件的使用授权（法律要求除外）。三页都列有 Wikimedia VRT 许可确认记录 **2008012110017088**。

1. [第一乐章：Adagio sostenuto — Commons 录音与许可](https://commons.wikimedia.org/wiki/File:Ludwig_van_Beethoven_-_sonata_no._14_in_c_sharp_minor_%27moonlight%27,_op._27_no._2_-_i._adagio_sostenuto.ogg)
2. [第二乐章：Allegretto — Commons 录音与许可](https://commons.wikimedia.org/wiki/File:Moonlight_Sonata_Allegretto.ogg)
3. [第三乐章：Presto — Commons 录音与许可](https://commons.wikimedia.org/wiki/File:Moonlight_Sonata_Presto.ogg)

相关状态标记：[Public Domain Mark 1.0](https://creativecommons.org/publicdomain/mark/1.0/)。该标记用于说明公有领域状态；实际录音的权利人放弃声明及许可确认以以上文件页为依据。

来源要求／请求保留 Musopen 链接署名；本项目在播放器内保留以下署名，并在音频 ID3 信息中记录演奏者和提供方：

> 钢琴：Paul Pitman · [Musopen](https://musopen.org/) · 公有领域录音

## 下载来源与处理

发布文件由下列 IMSLP 公开音频播放器链接提供的 256 kbps MP3 转码。三个原始文件的 ID3 演奏者均为 `Paul Pitman`。转换仅使用本机 FFmpeg 将音频编码为 **128 kbps MP3、44.1 kHz、双声道**，整理 ID3 曲目和来源信息；未剪辑乐章、变速、混入其他声音或合成替代演奏。

| 本地文件 | 乐章 | 检测时长 | 文件大小 |
| --- | --- | ---: | ---: |
| `moonlight-1.mp3` | I. Adagio sostenuto | 335.934694 秒（约 5:36） | 5,375,751 字节 |
| `moonlight-2.mp3` | II. Allegretto | 131.604898 秒（约 2:12） | 2,106,469 字节 |
| `moonlight-3.mp3` | III. Presto agitato | 493.740408 秒（约 8:14） | 7,900,642 字节 |

原始下载地址：

1. [IMSLP354249 — 第一乐章 MP3](https://s9.imslp.org/files/imglnks/usimg/d/d7/IMSLP354249-PMLP01458-Sonata_No._14_in_C_Sharp_Minor_Moonlight,_Op._27_No._2_-_I._Adagio_sostenuto.mp3)
2. [IMSLP354250 — 第二乐章 MP3](https://s9.imslp.org/files/imglnks/usimg/b/b2/IMSLP354250-PMLP01458-Sonata_No._14_in_C_Sharp_Minor_Moonlight,_Op._27_No._2_-_II._Allegretto.mp3)
3. [IMSLP354251 — 第三乐章 MP3](https://ks15.imslp.org/files/imglnks/usimg/0/0e/IMSLP354251-PMLP01458-Sonata_No._14_in_C_Sharp_Minor_Moonlight,_Op._27_No._2_-_III._Presto.mp3)

## SHA-256 校验

发布文件：

```text
f8db0054e9d9e0cd05c29fb98d9577b971f6243e611f720d5c8810b1856612e2  moonlight-1.mp3
a68c812fe7705e0fc0f4988418f7b0c9ad6b72d5ef479e50b200736fd9bbe510  moonlight-2.mp3
f901fb21ec88e1e197657f0b81d9468f0674382a620ed8c724809108d6bbc34e  moonlight-3.mp3
```

IMSLP 原始下载文件：

```text
fbf5f973bf9c06ba5727cb5e51b1c2758fba23987c0ddb2274b35f10d82b7c7e  IMSLP354249 (10,741,745 bytes)
68a15dfb7657a0cea3be46e0be58d88b37273c82c49592b859f1c4864a884ee5  IMSLP354250 (4,210,375 bytes)
5970259bb56da103876103bf41e85536ef046ddab54b13a34674fde6daf4e6bd  IMSLP354251 (15,785,980 bytes)
```

所有发布文件均通过 FFprobe 格式检查和 FFmpeg 从头到尾解码检查。开发核验材料及原始下载保存在未发布的 `.verification/moonlight/` 中。
