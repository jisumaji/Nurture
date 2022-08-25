import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navData } from './nav-items';
import {IToggle} from '../services/IToggle'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() toggleSide: EventEmitter<IToggle> = new EventEmitter();
  collapsed: boolean = false;
  navItems: any = navData;
  screenWidth = 0;
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.toggleSide.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
}