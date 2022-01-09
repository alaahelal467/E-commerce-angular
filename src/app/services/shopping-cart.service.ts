import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Good } from '../interfaces/goods.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private fs: AngularFirestore) { }
  addToCart(data: Good) {
    return this.fs.collection('cart').add(data);
  }

  getAllCarts() {
    return this.fs.collection('cart').snapshotChanges().pipe(
      
      map(actions=>{

        return actions.map(a=>{

          const data= a.payload.doc.data() as Good;

          const id=a.payload.doc.id;

          return {id,...data};

        })

      })
    )
  }
  deleteShoppedCart(id: any) {
    return this.fs.collection('cart').doc(id).delete();
  }

  
}
