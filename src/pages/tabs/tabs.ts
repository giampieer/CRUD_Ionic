import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ModalController } from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = LoginPage;
  constructor(public modalCtrl: ModalController) {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
