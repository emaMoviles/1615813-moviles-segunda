import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { LogUsuario } from 'src/assets/modelos/logueo';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {getFirestore,setDoc,doc} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth=inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
 
  // ###funcion de inicio de secion### 
  login(user:LogUsuario)
  {
    
    return signInWithEmailAndPassword(getAuth(),user.email,user.password);
  }
  // ### funcion de registro ###
  logout(user:LogUsuario)
  {
    return createUserWithEmailAndPassword(getAuth(),user.email,user.password);
  }
  // ### funcion para actualizar nombre de usuario ###
  updateUser(displayName:string)
  {
    return updateProfile(getAuth().currentUser,{displayName})
  }  

  // ### Base de Datos ###
  setDocument(path:string,data:any)
  {
    return setDoc(doc(getFirestore(),path),data);
  }
  getCurrentUSer()
  {
    return getAuth().currentUser.displayName;
  }

}
