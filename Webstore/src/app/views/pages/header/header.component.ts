import { Component, OnInit } from '@angular/core';
import {CartService } from 'src/app/services/cart.service'
import { AProduct } from 'src/app/interfaces/aproduct';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  cartItems: AProduct[] = [];
  showList = false;
  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => { 
      
      this.cartItems = items;

    });
    this.cartService.$cartTotal.subscribe(total => { 
      this.cartTotal = total;
  });
  this.cartService.$cartQuantity.subscribe(count => { 
    this.cartCount = count;
});

  }
  toggleList() {
    this.showList = !this.showList;
  }

  removeFromCart(item,index) {
    this.cartService.removeProduct(item,index);
  }

  checkout(){
    if (this.cartTotal === 0)
    {
      alert('NO PRODUCT TO CHECK OUT');
      //this.cartTotal=0;

    }
    else 
    {

    alert('YOUR CHECKOUT WAS SUCCESSFUL, THANKS FOR SHOPPING WITH US AND SEE YOU AGAIN!');
    }
  }

}
