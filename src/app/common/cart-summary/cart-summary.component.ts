import { Component, OnInit } from '@angular/core';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';
import { AdditionalServiceModel } from 'src/app/models/additionalServiceModel';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  additionalCartItems:AdditionalCartItem[]
  cartItems: CartItem[] = [];
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems=this.cartService.list2();
  }

  removeFromCart(car: Car) {
    this.cartService.removeFromCart(car);
    // this.toastrService.error('Deleted', car.brandName + ' deleted from cart.');
  }

  removeFromCart2(add: AdditionalServiceModel) {
    this.cartService.removeFromCart2(add);
    // this.toastrService.error('Deleted', car.brandName + ' deleted from cart.');
  }
}
