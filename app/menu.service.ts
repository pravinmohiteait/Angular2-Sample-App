import { Hero } from './hero';
import { MENUS } from './mock-menus';
import { Injectable } from 'angular2/core';

@Injectable()
export class MenuService {
  getMenuItems() {
    return Promise.resolve(MENUS);
  }
}
