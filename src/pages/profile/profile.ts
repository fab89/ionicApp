import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modalCCard } from './modalCCard/modalCCard';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { CCard } from '../../interfaces/ccard';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  profileSegment = 'info';
  cards: CCard[] = [{
      id: 1,
      intestatario: 'Fabrizio',
      ncarta: 41111111111,
      dateCard: '01/02/2020',
      cardSecureCode: 123,
      ccType: 'Visa'
    },
    {
      id: 2,
      intestatario: 'Fabrizio2',
      ncarta: 3425555788,
      dateCard: '01/02/2022',
      cardSecureCode: 358,
      ccType: 'American-Express'
    }]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController ) {

  }

  ngOnInit() {

  }

  modalAddCreditCard(cards: CCard){
    let modal = this.modalCtrl.create(modalCCard);
    modal.onDidDismiss( data => {
      data.id = this.cards.length +1;
      this.cards.push(data)
      console.log(data.id, 'data');
    });
    modal.present();
  }

  deleteCCard(card){
    let indexCCard = this.cards.indexOf(card);
    this.cards.splice(indexCCard, 1)
    console.log(indexCCard, 'carta eliminata')
  }

}
