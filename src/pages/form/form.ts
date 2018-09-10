import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlacesService} from "../../services/places.sevices";

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  lugar : any = {};
  constructor(public navCtrl: NavController, private placesService: PlacesService, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
  createPlace(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.placesService.createPlace(this.lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Nota Guardada con Éxito',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

}
