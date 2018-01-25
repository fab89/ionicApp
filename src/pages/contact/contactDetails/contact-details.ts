import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Input } from '@angular/core/src/metadata/directives';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  templateUrl: 'contact-details.html'
})
export class ContactDetails { 

  contact: any[];

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.contact = this.params.get("contact");
    console.log(this.contact)
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
