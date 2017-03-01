import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar.component.config';
import { MenuType } from './navbar.component.metadata';

@Component({
  moduleId: module.id + '',
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }

  public isLoggedIn() {
    return false;
  }

  public isAdmin() {
    return this.isLoggedIn() && true;
  }

  public getCurrentUserName() {
    return 'Yuxi';
  }

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  
}
