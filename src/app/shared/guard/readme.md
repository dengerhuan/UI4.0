---


## zh-CN

最简单的用法。

```JS
    {
      path: 'bus',
      component: LayoutComponent,
      canActivate: [AuthGuard], canActivateChild: [AuthGuard],
      children: [
        {path: '', redirectTo: 'page', pathMatch: 'full'},
        {path: 'page', component: PageComponent},
        {path: 'online', component: Page1Component},
        {path: 'map', component: MapComponent},
        {path: 'vip', loadChildren: './vip-apperceive/vip-apperceive.module#VipApperceiveModule'},
      ]
    },
```

## 描述
 路由守卫，依赖注入了userservice，用来在路由跳转中验证用户是否登陆

## API


|    参数     | 参数 | 类型 |  默认值 |
| ---------- | --- |---- | --- |

