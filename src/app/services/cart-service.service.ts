import { Injectable } from '@angular/core';
import { AdditionalCartItem } from '../models/additionalCartItem';
import { AdditionalServiceModel } from '../models/additionalServiceModel';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { AdditionalCartItems, CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  addToCart(car: Car) {
    let item = CartItems.find((c) => c.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  addToCart2(additionalServiceModel:AdditionalServiceModel) {
    let item2 = AdditionalCartItems.find(c=>c.additionalServiceModel.id==additionalServiceModel.id);
    if (item2) {
      item2.quantity += 1;
    } else {
      let cartItems = new AdditionalCartItem();
      cartItems.additionalServiceModel = additionalServiceModel;
      cartItems.quantity = 1;
      AdditionalCartItems.push(cartItems);
    }
  }

  removeFromCart(car: Car) {
    let item: CartItem = CartItems.find((c) => c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
  removeFromCart2(add: AdditionalServiceModel) {
    let item: AdditionalCartItem = AdditionalCartItems.find((c) => c.additionalServiceModel.id === add.id);
    AdditionalCartItems.splice(AdditionalCartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    return CartItems;
  }
  list2(): AdditionalCartItem[] {
    return AdditionalCartItems;
  }
}