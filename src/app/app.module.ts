import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormGroup } from '@angular/forms';
import { User } from '../interfaces/user';

import { loginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { Profile } from '../pages/profile/profile';
import { HeaderController } from '../pages/header/header';
import { modalSearch } from '../pages/modalSearch/modalSearch';
import { SignupPage } from '../pages/signup/signup';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InfoPage,
    Profile,    
    TabsPage,
    HeaderController,
    modalSearch,
    loginPage,
    SignupPage
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    },
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InfoPage,
    TabsPage,
    Profile,
    HeaderController,
    modalSearch,
    loginPage,
    SignupPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
