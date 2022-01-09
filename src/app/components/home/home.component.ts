import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Good } from 'src/app/interfaces/goods.interfaces';
import { GoodsService } from 'src/app/services/goods.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goods: Good[] = [];
  add: number = -1;
  currentRate = 3.14;
  constructor(private goodStore: GoodsService, private cs: ShoppingCartService, private config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    var sub = this.goodStore.getAllGoods().subscribe(
      data => {
        this.goods = data
        sub.unsubscribe()
      }
    )
  }



  addToCart(index: number) {
    this.add = +index;
    
  }

  buy(amount: any) {

    let selectedGood = this.goods[this.add];
    let buyedData = {
      name: selectedGood.name,
      amount: +amount,
      price:selectedGood.price
    }
    this.cs.addToCart(buyedData).then(() =>this.add = -1)

  }

}


