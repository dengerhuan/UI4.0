import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {MenuService, Menu} from '../../../../core/services/menu.service';
import {SettingService} from '../../../../core/services/setting.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'nb-side-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})


export class NavComponent implements OnInit {

  private CONTAINERCLS = 'side-nav-float-container';
  private CONTAINESHOW = 'side-nav-float-container-show';

  private containerEl: HTMLDivElement;

  constructor(public menus: MenuService, public setting: SettingService,
              private render: Renderer2,
              @Inject(DOCUMENT) private doc: Document) {

  }


  ngOnInit() {
    console.log(this.menus.menus);
    this.genContainer();
  }


  genContainer() {

    this.containerEl = this.render.createElement('div');
    this.render.addClass(this.containerEl, this.CONTAINERCLS + 'box');
    this.render.appendChild(this.doc.body, this.containerEl);

  }

  genSub(linkNode: HTMLLinkElement, item: Menu) {
    const id = '__side-floating-box' + item.__id;
    let node = this.containerEl.querySelector(`#${id}`);
    if (node) {
      return node;
    }

    node = linkNode.nextElementSibling.cloneNode(true) as HTMLUListElement;
    node.id = id;
    this.render.addClass(node, this.CONTAINERCLS);
    node.addEventListener('mouseleave', () => {
      this.hideAll();
    }, false);
    this.render.appendChild(this.containerEl, node);
    return node;
  }

  /**
   * 在小菜单模式下 鼠标经过后拦截鼠标事件传入鼠标的 时间以及   菜单
   * 之后生菜子菜单
   * 隐藏所有的菜单
   * 展示新的惨淡
   * 计算菜单的位置
   */

  hideAll() {
    this.containerEl.innerHTML = '';
  }

  /*
    hideAll() {
      //const nodes = Array.from(this.containerEl.querySelectorAll('.' + this.CONTAINESHOW));

      console.log(this.containerEl.children)

      const nodes = this.containerEl.children;

      /!*   Array.from(this.containerEl.children).forEach(item => {

           item['style.top'] = 0;
           // this.render.setStyle(item, 'style.top', 0);
         });
     *!/
      for (let i = 0; i < nodes.length; i++) {
        //   this.render.removeClass(nodes[i], this.CONTAINESHOW);

        nodes[i]['style.top'] = 0;
        console.log(nodes[i]['style.top']);
        this.render.setStyle(nodes[i], 'style.top', 0);
        console.log(nodes[i]);
      }
    }
  */

  /**
   * 子菜单鼠标移动监听
   * @param {MouseEvent} e
   * @param {Menu} item
   */
  showSubMenu(e: MouseEvent, item: Menu) {
    if (this.setting.layout.collapsed !== true) {
      return;
    }
    e.preventDefault();
    const linkNode = (e.target as Element);

    if (linkNode.nodeName !== 'A') {
      return;
    }
    /*  const subNode = this.genSubNode(linkNode as HTMLLinkElement, item);
      this.hideAll();
      subNode.classList.add(SHOWCLS);
      this.calPos(linkNode as HTMLLinkElement, subNode);*/

    /**
     * 计算绝对点
     */

    this.hideAll();

    const node = this.genSub(linkNode as HTMLLinkElement, item) as HTMLUListElement;

    this.render.addClass(node, this.CONTAINESHOW);
    const rect = linkNode.getBoundingClientRect();

    node.style.top = rect.top + this.doc.documentElement.scrollTop + 'px';
    node.style.left = '68px';
  }


  toggleOpen(menu: Menu) {
    this.menus.menus.forEach(item => {
      item.children.forEach(ii => {
        ii._open = false;
      });
    });
    menu._open = !menu._open;
  }
}
