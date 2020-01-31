import { Component, OnInit } from '@angular/core';
import { AProduct } from 'src/app/interfaces/aproduct';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  aProductList: AProduct[] = [];
  
  constructor(private aService: DataService, private cartService: CartService) { }
  

  ngOnInit() {
    this.aProductList = this.aService.getProducts();
    console.log(this.aProductList);
  }
  
  addToCart(item) {
    this.cartService.addItemsToCart(item)
  }
}

