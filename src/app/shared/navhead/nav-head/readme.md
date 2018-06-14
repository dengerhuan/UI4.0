---


## zh-CN

最简单的用法。

```HTML
    
<nb-nav-head [title]="'开发爸爸你好'" [subTitle]="'写代码的会上天'" [img]="img">

  <ng-template #extra>


    <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'">

      <div nz-col [nzSpan]="3">
        <nz-avatar nzSize="large" [nzSrc]="img"></nz-avatar>
      </div>
      <div nz-col [nzSpan]="6">
        <strong>10</strong> 个
        <p class="text-grey">开发任务</p>
      </div>
   <div nz-col [nzSpan]="5">
        <nz-badge [nzStatus]="'success'"></nz-badge>
        已完成
        <span class="">3</span>
      </div>
      <div nz-col [nzSpan]="5">
        <nz-badge [nzStatus]="'processing'"></nz-badge>
        正在进行
        <span class=" ">5</span>
      </div>
      <div nz-col [nzSpan]="5">
        <nz-badge [nzStatus]="'error'"></nz-badge>
        已失败
        <span class=" ">2</span>
      </div>
    </div>
  </ng-template>
</nb-nav-head>


```

## 描述

 复杂导航栏目，提供面包屑导航栏（自动检测当前地址）

## API


|    参数     | 参数 | 类型 |  默认值 |
| ---------- | --- |---- | --- |
| title  |  标题 | string | null |
| subTitle  |  子标题 | string |null |
| img  |  logo图片地址 | string | null |
| footer  |  底部扩展操作 | TemplateRef |null  |
| extra  |  右边扩展操作 | TemplateRef |null  |



## 支持内容投影
 - 支持
 ```HTML
 <nb-nav-head [title]="11231" [subTitle]="'chichichcichichci'" [img]="img">
 
   <input nz-input style="width: 200px;margin: 0 auto;display: block" [(ngModel)]="inputValue"
          placeholder="'Basic usage'"
          (ngModelChange)="toa($event)"/>
   <ng-template #footer>
     <nz-badge [nzStatus]="'success'"></nz-badge>
   </ng-template>
   <ng-template #extra>
     <nb-map-2d #map
                [height]="100">
     </nb-map-2d>
   </ng-template>
 </nb-nav-head>
```
