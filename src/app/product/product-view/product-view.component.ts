import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../model/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products: IProduct[] | undefined;
  selectedProduct: IProduct | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  showInfo(product: IProduct) {
    this.selectedProduct = JSON.parse(JSON.stringify(product));
  }

  hideInfo() {
    this.selectedProduct = undefined;
  }

}
