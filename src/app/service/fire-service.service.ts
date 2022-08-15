import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { collection, addDoc, Firestore } from "@angular/fire/firestore";
import {} from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {


  constructor(private fireAuth: AngularFireAuth, private router:Router, public firestore:Firestore) {}
    

  //createFile()
  //login method
    login(email : string, password: string){
      this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
        localStorage.setItem('token','true');
        this.router.navigate(['dashboard']);
      }, err=>{
        alert(err.message);
        this.router.navigate(['/signIn']);
      })
    }

    //register method
    register(email:string, password:string){
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
        alert('Successfully registrated');
        
        localStorage.setItem('token', 'true');
        this.router.navigate(['/signIn']);
      }, err=>{
        alert(err.message);
        this.router.navigate(['signUp']);
      })
    }

    //sign out
    logOut(){
      this.fireAuth.signOut().then(()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/signIn']);
      }, err=>{
        alert(err.message);
      })
    }

    loggedIn(){
      return !!localStorage.getItem('token');
    }

    addData(value:any){
      const dbInstance = collection(this.firestore, 'users');
      addDoc(dbInstance, value).then(()=>{
        alert('Data sent')
      }) .catch((err)=>{
        alert(err.message)
      })
    }
  
}
