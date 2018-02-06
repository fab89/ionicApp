import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../interfaces/user';
import  firebase  from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.user = new User();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpForm(){
    return firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then(response => {
      firebase.database().ref('/userProfile').child(response.uid)
      .set({user: this.user})
    })
  }

  goBack() {
    this.navCtrl.pop();
 }
}
