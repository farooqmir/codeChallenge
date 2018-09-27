import { Component } from '@angular/core';
import {ITEMS} from './feature/shared/items';
import {FilteringService} from './feature/shared/services/filtering.service';
/**
 * @export
 * @class AppComponent
 * @Desc: Main app component class
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilteringService]
})


export class AppComponent {
  title = 'app';

  constructor(public filteringService: FilteringService) {
     this.isPublished = 'ALL';
     this.cart = [];
     this.cartIds = [];
  }

  /**
   * @memberof AppComponent
   * Products store (displayed and original copy)
   */
  fproducts = JSON.parse(JSON.stringify(ITEMS));
  products = JSON.parse(JSON.stringify(ITEMS));

  /**
 * @memberof AppComponent
 * @Desc: Cart Object.
 */
  cart: Cart[];
  cartIds:any[];
  isPublished:Boolean;
  /**
   * @param {*} $event
   * @memberof AppComponent
   * Called on advanced filter change
   */
  onFilterChange($event) {
    console.log("console---");
    console.log($event);
    this.products = this.filteringService.applyAdvancedFilter(this.fproducts,$event.filters,$event.categories);
  }

  /**
   * @param {*} $event
   * @memberof AppComponent
   * Called on advanced filter change
   */
  onFilterPublishChange($event) {
    console.log("console---");
    console.log($event);
    this.isPublished = $event.params.isPublished;
    if($event.params.isPublished=='ALL')
      this.products = this.fproducts;
    else
      this.products = this.filteringService.applyFilter(this.fproducts, {isPublished: $event.params.isPublished}, this.cartIds);

  }

  /**
   * @param {*} product
   * @memberof AppComponent
   * Add To Cart: Adds the item to the cart and applies the filter in context
   */
  addToCard(product) {
   console.log(product);
   this.cartIds.push(product.id);
   this.cart.push({productId: product.id, productName: product.productName});
   this.products = this.filteringService.applyFilter(this.fproducts, {isPublished: this.isPublished}, this.cartIds );
  }

  /**
   * @param {*} product
   * @memberof AppComponent
   * Remove Cart: Remove the item from the cart and applies the filter in context
   */
  removeFromCart(cart) {
    this.cartIds.splice(this.cartIds.indexOf(cart), 1);
    this.cart = this.cart.filter(function(item) {
      if (item.productId == cart.productId)
        return false;
      else
        return true;
    });
    this.products = this.filteringService.applyFilter(this.fproducts, {isPublished: this.isPublished}, this.cartIds );
  }
}
