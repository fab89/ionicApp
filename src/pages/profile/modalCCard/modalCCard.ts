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
  ccType: string = ''; 

  constructor(public NavController: NavController, public viewCtrl: ViewController) { }

  saveCCard(){
    console.log(this.card, "from modale")
    this.card.ccType = this.CCardsTypeDetector()
    this.viewCtrl.dismiss(this.card);
  }

  closeCCardModal(){
    this.NavController.pop();
  }

  CCardsTypeDetector(){
    console.log(this.card.ncarta ,'numero')
    var visa_regex = new RegExp("^4");
    if (String(this.card.ncarta).match(visa_regex) != null){      
      console.log('Visa')
      return this.ccType ="Visa";
    }
    var amex_regex = new RegExp("^3$|^3[47][0-9]{0,13}$");
    if (String(this.card.ncarta).match(amex_regex) != null){      
      console.log('American Express')
      return this.ccType ="American-Express";
    }
    var mastercard_regex = new RegExp("^5$|^5[1-5][0-9]{0,14}$");
    if (String(this.card.ncarta).match(mastercard_regex) != null){      
      console.log('Mastercard')
      return this.ccType ="Mastercard";
    }
    if (String(this.card.ncarta).match(mastercard_regex || amex_regex || visa_regex) != null){      
      console.log('Nessun riscontro')
      return this.ccType ="";
    }
  }
  

}

