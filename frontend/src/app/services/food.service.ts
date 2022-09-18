import { Injectable } from '@angular/core';
import { Foods } from '../share/model/food';
import { Tag } from '../share/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }
  getAllTag(): Tag[] {
    return [
      { name: 'Categories :', count:4},
      { name: 'All', count: 10 },
      { name: 'Burger', count: 4 },
      { name: 'Biriyani', count: 3 },
      { name: 'fastfood', count: 2 },
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'fish fry',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/fishfry.jpeg',
        tags: ['Fish fry', 'indian Style', 'starters'],

      },
      {
        id: 2,
        name: 'Noodels',
        price: 199,
        favorite: true,
        origins: ['chinees'],
        stars: 4.5,
        imageUrl: '/assets/img/noodels.jpeg',
        tags: ['noodels', 'Chinees Style', 'FastFood'],

      },
      {
        id: 3,
        name: 'Biriyani',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/biriyani1.jpg',
        tags: ['Biriyani', 'indian Style', ],

      },
      {
        id: 4,
        name: 'Biriyani- Dum',
        price: 99,
        favorite: true,
        origins: ['Hyderabady Dum Biriyani'],
        stars: 4.5,
        imageUrl: '/assets/img/biriyani2.jpg',
        tags: ['Dum Biriyani', 'indian Style', ],

      },
      {
        id: 5,
        name: 'Biriyani - Mutton',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/biriyani3.jpg',
        tags: ['Mutton Biriyani', 'indian Style', ],

      },
      {
        id: 6,
        name: 'Burger',
        price: 99,
        favorite: true,
        origins: ['Italian'],
        stars: 4.5,
        imageUrl: '/assets/img/burger1.jpg',
        tags: ['Burger', 'indian Style', 'starters'],

      },
      {
        id: 7,
        name: 'Burger',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/burger2.jpg',
        tags: ['Burger', 'indian Style', 'starters'],

      },
      {
        id: 8,
        name: 'Burger',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/burger3.jpg',
        tags: ['Burger', 'indian Style', 'starters'],

      },
      {
        id: 9,
        name: 'Pizza',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/pizza1.jpg',
        tags: ['Pizza', 'indian Style', ],

      },
      {
        id: 10,
        name: 'Pizza',
        price: 99,
        favorite: true,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: '/assets/img/pizza2.jpg',
        tags: ['Pizza', 'indian Style', ],

      },

    ]
  }
}
