import {Component, OnInit} from '@angular/core';
import {BarDataSet} from "../../../../shared/chart/bar/bar.component";

@Component({
  selector: 'nb-question-terminal',
  templateUrl: './question-terminal.component.html',
  styleUrls: ['./question-terminal.component.less']
})
export class QuestionTerminalComponent implements OnInit {

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


  httpd = [['金立S10CL', 11, 0.55],
    ['金立GN5007L', 22, 0.74],
    ['金立GN5003', 23, 0.99],
    ['金立S9 智能版', 26, 1.50],
    ['荣耀KIW-TL00', 27, 1.96],
    ['荣耀CAM-TL00', 61, 1.96],
    ['小米MAE136', 28, 2.03],
    ['金立M7L', 18, 2.06],
    ['OPPOA53', 15, 2.06],
    ['步步高Y79', 23, 2.18],
    ['小米2016050', 15, 2.23],
    ['魅族M681Q', 16, 2.23],
    ['华为TRT-TL10A', 45, 2.34],
    ['华为TRT-TL10', 12, 2.34],
    ['华为VNS-AL00', 12, 2.35],
    ['华为NXT-AL10', 165, 2.42],
    ['步步高X9s Plus L', 29, 2.43],
    ['华为TRT-AL00A', 21, 2.53],
    ['步步高Y51T L', 12, 2.60],
    ['华为MT7-TL00', 37, 2.64],
    ['荣耀ATH-AL00', 11, 2.66],
    ['步步高Y66', 41, 2.67],
    ['OPPOA59m', 116, 2.69],
    ['步步高Y55A', 38, 2.70],
    ['步步高Y66L', 150, 2.76],
    ['金立GN9011', 14, 2.76],
    ['步步高Y55L', 16, 2.77],
    ['三星SM-G9350', 23, 2.79],
    ['荣耀CAM-AL00', 17, 2.84],
    ['金立S10BL', 19, 2.91],
    ['华为NCE-TL10', 16, 2.92],
    ['华为SLA-TL10', 11, 2.95],
    ['步步高V3M A', 31, 2.96],
    ['金立GN5001S', 25, 2.96],
    ['步步高Y35', 28, 2.98],
    ['步步高Y53L', 67, 2.99],
    ['金立GN8001', 19, 2.99],
    ['小米2016112', 17, 2.99]];

  volted = [['小米2015711', 18, 2.29],
    ['步步高X6Plus D', 39, 2.37],
    ['步步高Y66i', 15, 2.40],
    ['华为NCE-TL10', 16, 2.41],
    ['华为ALP-TL00', 30, 2.50],
    ['华为MHA-AL00', 210, 2.51],
    ['步步高Y79', 23, 2.55],
    ['小米2015112', 22, 2.57],
    ['步步高X9s L', 74, 2.58],
    ['步步高X9', 170, 2.58],
    ['OPPOA79t', 17, 2.59],
    ['步步高V3M A', 32, 2.59],
    ['OPPOR9sk', 86, 2.59],
    ['OPPOA59m', 118, 2.60],
    ['OPPOR11s', 32, 2.61],
    ['苹果iPhone 6s(A1691)', 31, 2.62],
    ['金立GN9012', 15, 2.62],
    ['华为VIE-AL10', 67, 2.63],
    ['荣耀FRD-AL10', 78, 2.65],
    ['苹果iPhone 6s', 150, 2.65],
    ['OPPOA57t', 111, 2.66],
    ['华为ALP-AL00C', 32, 2.67],
    ['步步高Xplay6L', 13, 2.68],
    ['金立S10BL', 20, 2.68],
    ['荣耀DUK-AL20', 42, 2.69]];


  constructor() {
  }

  ngOnInit() {
  }

}