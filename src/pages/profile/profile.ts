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
  card: CCard = new CCard();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController ) {

  }

  ngOnInit() {
    
  }

  modalAddCreditCard(){
    let modal = this.modalCtrl.create(modalCCard);
    modal.onDidDismiss(data => {
      console.log(data, 'data');
    });
    modal.present();
  }

}
