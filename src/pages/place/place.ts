import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlacesService} from "../../services/places.sevices";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lugar : any = {};

  constructor(public navCtrl: NavController, private placesService: PlacesService, private alertCtrl: AlertController, public navParams: NavParams) {
    this.lugar= this.navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }
  updatePlace(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.placesService.editPlace(this.lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Nota Guardada con Éxito',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

}
