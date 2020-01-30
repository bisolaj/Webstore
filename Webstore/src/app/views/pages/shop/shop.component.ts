import { Component, OnInit } from '@angular/core';
import { AProduct } from 'src/app/interfaces/aproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  aProductList: AProduct[];
  
  constructor(private aService: DataService ) { }

  ngOnInit() {
    this.aProductList = this.aService.getProducts();

  }
  
  addToCart(item) {
    alert('Under Construction');
  }
}
