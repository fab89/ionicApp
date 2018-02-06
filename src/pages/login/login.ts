import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Profile } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import firebase from 'firebase';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class loginPage {

  @Input() user: User;

  constructor(private navCtrl: NavController, 
    public toastCtrl: ToastController, 
    private http: HttpClientModule) { }

  ngOnInit() {
    this.user = new User();
  } 
  
  signIn(user){
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(response => {
      const toast = this.toastCtrl.create({
        message: 'Login effettuato correttamente',
        duration: 3500,
        position: 'top',
        dismissOnPageChange: true
      });
      toast.present();
      this.navCtrl.push(TabsPage);
    }, error => {
            const toast = this.toastCtrl.create({
        message: 'Login negato',
        duration: 3500,
        position: 'top',
        dismissOnPageChange: true
      });
      toast.present();
      console.log(error)
    })
  } 

  signUp(){
    this.navCtrl.push(SignupPage);
  }
}
