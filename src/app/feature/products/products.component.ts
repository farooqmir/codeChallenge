import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ITEMS} from "../shared/items";
/**
 * @export
 * @class ProductsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  /**
   * @memberof ProductsComponent
   * Cart: Object stores the cart information
   * Products: Stores the products information
   */
  @Input() cart;
  @Input() products;

  /* products: store original products state */
  products_: any[];

  /**
   * @memberof ProductsComponent
   * Emits Add to Cart
   */
  @Output() addToCart = new EventEmitter();

  //TODO: To be removed
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  constructor() {
    this.products_ = this.products;
  }

  /**
   * @param {*} product
   * @memberof ProductsComponent
   * @Desc: Emits add to cart
   */
  addtocart(product) {
    this.addToCart.emit(product);
  }

  ngOnInit() {

  }

}
