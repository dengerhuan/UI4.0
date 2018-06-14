---


## zh-CN

最简单的用法。

```ts
 <nb-card [title]="'用户数'" kpi="123" contentHeight="46" [extra]="action3">
 </nb-card>

<ng-template #action3>
  <nz-tooltip [nzTitle]="'指标说明'">
    <i nz-tooltip class="anticon anticon-file"></i>
  </nz-tooltip>
</ng-template>
```

## 描述
基于  nz-card封装的卡片用来展示指标



## API


|    参数     | 参数 | 类型 |  默认值 |
| ---------- | --- |---- | --- |
| title |  标题 | string | null |
| kpi  |  指标值 | number | null |
| contentHeight  |  盒子高度 | number |auto  |
| extra  |  扩展操作 | string|TemplateRef |null  |


## 支持内容投影
 - 支持
 最简单的用法。
 ```HTML
  <nb-card [title]="'用户数'" kpi="123" contentHeight="46" [extra]="action3">
      <nb-miniarea height="46" [data]="data"></nb-miniarea>
  </nb-card>
```

