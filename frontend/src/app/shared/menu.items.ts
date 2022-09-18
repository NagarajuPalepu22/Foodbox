import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
  
}
const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard'},
    { state: 'category', name: 'Manage Category', icon: 'category'  },
    { state: 'product', name: 'Manage Product', icon: 'inventory_2' },


];
@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}