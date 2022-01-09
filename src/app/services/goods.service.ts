import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Good } from '../interfaces/goods.interfaces';
@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) {
    
  }
  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges().pipe(
      
      map(actions=>{

        return actions.map(a=>{

          const data= a.payload.doc.data() as Good;

          const id=a.payload.doc.id;

          return {id,...data};

        })

      })
    )

}
}
