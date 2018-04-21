import {Component, OnInit} from '@angular/core';
import {BarDataSet} from "../../../../shared/chart/bar/bar.component";

@Component({
  selector: 'nb-question-sp',
  templateUrl: './question-sp.component.html',
  styleUrls: ['./question-sp.component.less']
})
export class QuestionSpComponent implements OnInit {

  piedata = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9},
    {item: '事例一', count: 40},
    {item: '事例二1', count: 21},
    {item: '事例三2', count: 17},
  ];
  data: BarDataSet[] = [
    {x: 'xwa', y: 275},
    {x: 'asdaw', y: 115},
    {x: 'Action', y: 120},
    {x: 'Shooter', y: 350},
    {x: 'ss', y: 150},
    {x: '1dsa', y: 275},
    {x: 'Strategy', y: 115},
    {x: '1', y: 120},
    {x: 'Shooter', y: 350},
    {x: 'Other', y: 150},
    {x: '112', y: 275},
    {x: 'saw', y: 115},
    {x: '123', y: 120},
    {x: '12312424', y: 350},
    {x: '2c', y: 150}
  ];


  httpd = [['aliyunvideo.rr.tv', 3, 113844],
    ['qhq.hexin.cn:8080', 48, 58728],
    ['shmmsns.qpic.cn', 1895, 27037],
    ['mmbiz.qpic.cn', 3458, 18971],
    ['wx.qlogo.cn', 2367, 10164],
    ['short.weixin.qq.com', 1776, 4931],
    ['203.107.1.1', 174, 4564],
    ['f.us.sinaimg.cn', 1, 3244],
    ['mobile.elevensky.net:8888', 135, 3094],
    ['pingma.qq.com:80', 224, 2851],
    ['msg.71.am', 67, 2765],
    ['rd.139site.com', 251, 2519],
    ['p1.pstatp.com', 643, 2374],
    ['v11-dy.ixigua.com', 552, 2334],
    ['apis.map.qq.com', 520, 2325],
    ['inews.gtimg.com', 51, 2124],
    ['report.imtt.qq.com', 343, 2095],
    ['p3.pstatp.com', 794, 1851],
    ['218.205.68.160:8080', 458, 1744],
    ['szmmsns.qpic.cn', 613, 1705],
    ['newsapi.sina.cn', 293, 1689],
    ['i1.go2yd.com', 100, 1628],
    ['v3-dy.ixigua.com', 109, 1623],
    ['comm.vivo.com.cn', 467, 1619]];

  tcpd = [['140.205.252.96', 443, 1123, 547],
    ['106.11.140.2', 443, 841, 630],
    ['118.190.76.92', 80, 810, 587],
    ['17.167.194.230', 443, 579, 516],
    ['192.168.1.1', 7, 492, 323],
    ['17.167.192.231', 443, 450, 417],
    ['17.167.194.224', 443, 448, 416],
    ['17.142.169.200', 443, 446, 420],
    ['17.142.169.199', 443, 425, 386],
    ['121.201.60.170', 5757, 399, 134],
    ['17.167.192.225', 443, 376, 362],
    ['17.139.246.7', 443, 299, 284],
    ['117.144.245.178', 8012, 289, 154],
    ['17.139.246.6', 443, 271, 262],
    ['27.123.50.45', 443, 253, 163],
    ['17.120.252.12', 443, 248, 243],
    ['117.185.24.123', 80, 241, 220],
    ['120.204.10.103', 80, 232, 198],
    ['17.125.249.10', 443, 230, 223],
    ['17.139.246.5', 443, 219, 216],
    ['192.168.0.1', 7, 216, 150],
    ['223.119.50.209', 80, 215, 206],
    ['17.42.252.19', 443, 205, 198],
    ['17.42.252.20', 443, 203, 202]];


  constructor() {
  }

  ngOnInit() {
  }

}
