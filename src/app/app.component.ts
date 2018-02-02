import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { loginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyArCmv_-fSrM7MbzJZzSZxqJS5hN1kqwUo',
  authDomain: 'ionic-location.firebaseapp.com',
  databaseURL: 'https://ionic-location.firebaseio.com/',
  projectId: 'ionic-location',
  storageBucket: 'gs://ionic-location.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = loginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
