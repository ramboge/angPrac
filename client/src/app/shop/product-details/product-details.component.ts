import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product?: Product;
  //Activated root will have the clicked product id
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    const id= this.activatedRoute.snapshot.paramMap.get('id');
     //here we add + to get away error of string type to number
    if(id) this.shopService.getProduct(+id).subscribe({  
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }
}
