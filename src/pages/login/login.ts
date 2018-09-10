import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthServices} from "../../services/auth.services";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public viewCtrl: ViewController, public authServices: AuthServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginFacebook() {
    this.authServices.loginWithFacebook().then((response)=> {
      this.viewCtrl.dismiss();
      localStorage.setItem('loginData', JSON.stringify(response));
    })

  }
  cancelar(){
    this.viewCtrl.dismiss();
  }

}
