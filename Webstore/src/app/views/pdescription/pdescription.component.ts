import { Component, OnInit } from '@angular/core';
import { AProduct } from 'src/app/interfaces/aproduct';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdescription',
  templateUrl: './pdescription.component.html',
  styleUrls: ['./pdescription.component.scss']
})
export class PDescriptionComponent implements OnInit {

  productDesc: AProduct;
  
  constructor(private aService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('name');
    this.aService.getProduct(id).subscribe(
      item => this.productDesc = item
    )
  }

}
