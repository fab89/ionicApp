import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ContactService } from '../../services/contacts/contacts.service';
import { ContactDetails } from './contactDetails/contact-details';
import { HttpClient } from '@angular/common/http';
import { Modal } from 'ionic-angular/components/modal/modal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  item;
  contacts: any;
  constructor(public navCtrl: NavController, public contactList: ContactService, public modalController: ModalController) {

  }

  ngOnInit(){
    this.contactList.getContactList().subscribe(
      response => {
        this.contacts = response
        console.log(this.contacts)
      } 
    )
  }

  getContactDetails(contact){
    let modal: Modal = this.modalController.create(ContactDetails, {'contact': contact});
    modal.onDidDismiss(contact => {
    });
    modal.present();
  }

  

}
