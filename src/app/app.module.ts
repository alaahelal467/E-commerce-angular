import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/base-UI-components/nav/nav.component';
import { FooterComponent } from './components/base-UI-components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCKfiyK6aJLSt6FyLzhbiDEMO5L-ZJ0SgM",
  authDomain: "intouch-b972e.firebaseapp.com",
  projectId: "intouch-b972e",
  storageBucket: "intouch-b972e.appspot.com",
  messagingSenderId: "323522888065",
  appId: "1:323522888065:web:7643a352de3b079b152880",
  measurementId: "G-PQHMNFLL8D"
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
