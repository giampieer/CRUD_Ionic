import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from "../../services/places.sevices";

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  lugar : any = {};
  constructor(public navCtrl: NavController, private placesService: PlacesService, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  createPlace(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.placesService.createPlace(this.lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'CREATE !!',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }
}
