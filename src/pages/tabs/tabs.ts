import { Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPage } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { Profile } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = Profile;
  tab4Root = ContactPage;
  tab5Root = InfoPage;

  constructor() {

  }
}
