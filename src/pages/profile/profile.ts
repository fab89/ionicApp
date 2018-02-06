import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modalCCard } from './modalCCard/modalCCard';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { CCard } from '../../interfaces/ccard';
import { notificationPage } from './notifications/notifications';
import firebase from 'firebase';
import { loginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { Camera } from '@ionic-native/camera';


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
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    public toastCtrl: ToastController,
    public app: App,) {

  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    var name, email, uid, emailVerified;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
      console.log(name,'name')
    }
  }

  modalAddCreditCard(cards: CCard){
    let modal = this.modalCtrl.create(modalCCard);
    modal.onDidDismiss( data => {
      if (data != null){
        data.id = this.cards.length +1;
        this.cards.push(data)
        console.log(data.id, 'data');
      }
    });
    modal.present();
  }

  deleteCCard(card){
    let indexCCard = this.cards.indexOf(card);
    this.cards.splice(indexCCard, 1)
    console.log(indexCCard, 'carta eliminata')
  }

  showNotifications(){
    this.navCtrl.push(notificationPage)
  }

  logOut(){
    firebase.auth().signOut().then( success => {
      this.app.getRootNav().setRoot(loginPage);
    }, function(error) {
      const toast = this.toastCtrl.create({
        message: 'Errore, riprovare',
        duration: 3500,
        position: 'bottom',
        dismissOnPageChange: true
      });
      toast.present();
    });
  }
}
