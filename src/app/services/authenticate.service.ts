import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials){
    return new Promise((accept, reject) => {
      this.storage.get("user").then((data) => {
        console.log(data.password)
      if ( 
        credentials.email == "mjair63@gmail.com" && credentials.password == "savenamiko"
      ) { 
        accept("Login Correcto");
    } else {
      reject("Login Incorrecto")
    }
      }
      );
  }
    );
  }

  registerUser(registerData){
    registerData.password = btoa(registerData.password)
    return this.storage.set("user", registerData)
  }

}
