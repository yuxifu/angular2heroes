import { MenuType, RouteInfo } from './navbar.component.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Brackets Services', menuType: MenuType.BRAND },
  { path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];
