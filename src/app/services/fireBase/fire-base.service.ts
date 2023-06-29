import { Injectable } from '@angular/core';
//import firebase  from 'firebase/compat';
//import 'firebase/compat/storage'
//import { API_ROUTES } from 'src/apis-routes';
//firebase.initializeApp(API_ROUTES.firebase);
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  //storaRef = firebase.app().storage().ref();
  constructor() { }

  // async uploadimage(nombre:string,imgBase64:any){
  //   try{
  //     let response = await this.storaRef.child("user/"+nombre).putString(imgBase64);
  //     console.log(response);
  //   }catch(err){

  //   }
  // }
}
