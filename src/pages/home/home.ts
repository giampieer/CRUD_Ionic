import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { PlacesService } from "../../services/places.sevices";
import { FormPage } from "../form/form";
import { PlacePage } from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  lugares : any = [];
  lugar : any = {};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private placesService: PlacesService) {
    this.placesService.getPlaces().valueChanges()
      .subscribe((places) => {
          this.lugares = places;
          console.log(this.lugares);
        }
      );
  }
  create(){
    this.navCtrl.push(FormPage);
  }
  update(lugar){
    this.navCtrl.push(PlacePage,{lugar: lugar});
  }
  deletePlace(lugar){
    this.placesService.deletePlace(lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'DELETE !!',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    });
  }
}
