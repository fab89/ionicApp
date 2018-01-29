import { Component, Injectable } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Profile } from '../profile';
import { CCard } from '../../../interfaces/ccard';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  templateUrl: 'modalCCard.html'
})
export class modalCCard {
  card = new CCard();
  constructor(public NavController: NavController, public viewCtrl: ViewController) { }

  saveCCard(){

    console.log(this.card)
    this.viewCtrl.dismiss(this.card);
  }

  closeCCardModal(){
    this.NavController.pop();
  }


 

}

