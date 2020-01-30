import { Injectable } from '@angular/core';
import { AProduct } from '../interfaces/aproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems: AProduct[] = [];
public $cartItems = new BehaviorSubject<AProduct[]>(this.cartItems);    //behaviour subject to listen when it changes
cartTotal = 0;
public $cartTotal = new BehaviorSubject<number>(this.cartTotal);    //behaviour subject to listen when it changes

cartQuantity = 0;
$cartQuantity = new BehaviorSubject<number>(this.cartQuantity);    //behaviour subject to listen when it changes

constructor() { }
addItemsToCart (item: AProduct) {
  let cartItem = this.cartItems.find(x => x.id === item.id)
  if (cartItem) {
    cartItem.quantity++;
}
else {
  item.quantity =1;
  this.cartItems.push(item);
}
  this.cartQuantity++;
  console.log(this.cartItems);
  this.cartTotal += +item.price; //+item.price converting price string to a number
  this.$cartItems.next(this.cartItems);  //broadcast the cartItem has changed
  this.$cartTotal.next(this.cartTotal);
  this.$cartQuantity.next(this.cartQuantity);
}

removeProduct(item,index) {
  this.cartItems.splice(index,1);
  const totalPrice = item.quantity * +item.price;
  this.cartTotal -= totalPrice;
  this.cartQuantity -= item.quantity;

  this.$cartItems.next(this.cartItems);  //broadcast the cartItem has changed
  this.$cartTotal.next(this.cartTotal);
  this.$cartQuantity.next(this.cartQuantity);
}

}
