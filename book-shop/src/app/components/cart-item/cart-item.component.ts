import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cart: Cart;
  @Output() changed = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  removeBook(index) {
    this.cartService.removeBook(index);
    this.changed.emit();
  }

  increaseQuantity(cart: Cart) {
    this.cartService.increaseQuantity(cart);
    this.changed.emit();
  }

  decreaseQuantity(cart: Cart) {
    this.cartService.decreaseQuantity(cart);
    this.changed.emit();
  }
}
