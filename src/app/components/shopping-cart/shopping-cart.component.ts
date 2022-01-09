import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interfac';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart[] = [];
  constructor(private cs:ShoppingCartService) { }

  ngOnInit(): void {
    var sub = this.cs.getAllCarts().subscribe(
      data => {
        this.cart = data
        sub.unsubscribe()
      }
    )

    var del = this.cs.getAllCarts().subscribe(
      data => {
        this.cart = data
        sub.unsubscribe()
      }
    )
  }

  delelteCart(index: number) {
   this.cs.deleteShoppedCart(this.cart[index].id).then(res=>{})
  }

}
