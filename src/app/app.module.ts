import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FireServiceService } from './service/fire-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Firestore } from "@angular/fire/firestore";
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCye-SIXH8HPvbBGjuO_at1DFQNFQuGc4Y",
      authDomain: "firestore-test-68185.firebaseapp.com",
      projectId: "firestore-test-68185",
      storageBucket: "firestore-test-68185.appspot.com",
      messagingSenderId: "238914916912",
      appId: "1:238914916912:web:7f1489a68ca139305953f5"
    }),
    
    
    AngularFireDatabaseModule
    
  ],
  providers: [FireServiceService, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
