import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormGroup } from '@angular/forms';

/* INTERFACES */
import { User } from '../interfaces/user';
import { Post } from '../interfaces/posts';

/* PAGES */
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

/* SERVICES */
import { PostService } from '../services/posts/post.service'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';


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
    SignupPage,    

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
    }),
  ],
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
    SignupPage,   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    PostService
  ]
})
export class AppModule {}
