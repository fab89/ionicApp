import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderController } from '../header/header'
import { Searchbar } from 'ionic-angular/components/searchbar/searchbar';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { modalSearch } from '../modalSearch/modalSearch';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  getSearchbar(){
    let modal: Modal = this.modalController.create(modalSearch);
    modal.present();
    console.log('modale')
  }

}
