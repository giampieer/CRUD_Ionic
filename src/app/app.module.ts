import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {PlacesService} from "../services/places.sevices";
import {FormPage} from "../pages/form/form";
var firebaseConfig = {
  apiKey: "AIzaSyAD_6K7hEnZXHn-iNIdsFaCByTQeuVc4Jo",
  authDomain: "mobile-giampieer.firebaseapp.com",
  databaseURL: "https://mobile-giampieer.firebaseio.com",
  projectId: "mobile-giampieer",
  storageBucket: "mobile-giampieer.appspot.com",
  messagingSenderId: "243949067915"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]


})
export class AppModule {}
