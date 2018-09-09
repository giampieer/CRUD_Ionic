import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlacesService} from "../../services/places.sevices";
import {FormPage} from "../form/form";
import {Observable} from "rxjs";
import { AngularFireDatabase } from 'angularfire2/database';
import {map} from"rxjs/internal/operators";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  lugares : any = [];
  constructor(public navCtrl: NavController, private placesService: PlacesService, afDB: AngularFireDatabase) {
    this.placesService.getPlaces().valueChanges()
      .subscribe((places) => {
          this.lugares = places;
          console.log(this.lugares);
        }
      );
  }


  irALugar(placeName){
    this.navCtrl.push(FormPage);
  }
}
