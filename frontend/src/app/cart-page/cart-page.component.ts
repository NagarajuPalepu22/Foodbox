import { Component, OnInit } from '@angular/core';
import { Cart } from './../share/model/Cart';
import { CartService } from './../services/cart.service';
import { CartItem } from './../share/model/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
 Cart!: Cart;
  constructor(private cartService:CartService) {

    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.Cart = this.cartService.getCart();
  }
  removeFromCart(CartItem:CartItem){
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }
  changeQuantity(CartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(CartItem.food.id,quantity);
    this.setCart();
  }

}
