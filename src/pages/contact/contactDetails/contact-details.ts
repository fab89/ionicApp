import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  templateUrl: 'contact-details.html'
})
export class ContactDetails {

  constructor(public navCtrl: NavController) {

  }

}
