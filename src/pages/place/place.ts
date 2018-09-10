import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from "../../services/places.sevices";

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lugar : any = {};

  constructor(public navCtrl: NavController, private placesService: PlacesService, private alertCtrl: AlertController, public navParams: NavParams) {
    this.lugar= this.navParams.get('lugar');
  }

  updatePlace(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.placesService.editPlace(this.lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'UPDATE',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }
}
