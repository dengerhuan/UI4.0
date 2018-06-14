---


## zh-CN

最简单的用法。

```HTML
    
<nb-nav-tools class="content-title" [type]="type" (nbChange)="search($event)">

</nb-nav-tools>

```

## 描述

 简单导航栏目，默认提供三个时间选择器加搜索按钮支持内容投影

## API


|    参数     | 参数 | 类型 |  默认值 |
| ---------- | --- |---- | --- |
| type  |  时间选择器类型 | string （day|range|week）| null |
| nbChange  |  搜索按钮点击 | 事件 |null |



## 支持内容投影
 - 支持
 ```HTML
<nb-nav-tools class="content-title" [type]="type" (nbChange)="search($event)">
  <nz-select style="width: 120px;"
             [(ngModel)]="_time_dimension" (ngModelChange)="conditionRefresh($event)"
             nzAllowClear
             nzPlaceHolder="时间维度">
    <nz-option nzValue="range" nzLabel="天"></nz-option>
    <nz-option nzValue="week" nzLabel="周"></nz-option>
  </nz-select>

</nb-nav-tools>
```
