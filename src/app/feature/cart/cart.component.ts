import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * @export
 * @class CartComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {
  @Input() cart;
  @Output() removeFromCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*
  Function:removefromcart
  Description: Removes item from the cart
  Param: Cart Item in context
  */
  removefromcart(cartItem) {
    this.removeFromCart.emit(cartItem);
  }
}
