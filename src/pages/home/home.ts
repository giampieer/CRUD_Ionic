import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {PlacesService} from "../../services/places.sevices";
import {FormPage} from "../form/form";
import {Observable} from "rxjs";
import { AngularFireDatabase } from 'angularfire2/database';
import {map} from"rxjs/internal/operators";
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  lugares : any = [];
  lugar : any = {};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private placesService: PlacesService, afDB: AngularFireDatabase) {
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
  deletePlace(){
    this.placesService.deletePlace(this.lugar).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Nota Guardada con Éxito',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.push(HomePage);
    });
  }
}
