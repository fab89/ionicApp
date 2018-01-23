import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Profile } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class loginPage {

  @Input() user: User;

  constructor(private navCtrl: NavController, public toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.user = new User();
  }

  signIn(user){
    if(this.user.email) {
      const toast = this.toastCtrl.create({
        message: 'Login effettuato correttamente',
        duration: 2500,
        position: 'top',
        dismissOnPageChange: true
      });
      toast.present();
      this.navCtrl.push(TabsPage);
    } else {
      const toast = this.toastCtrl.create({
        message: 'Login negato',
        duration: 2500,
        position: 'top',
        dismissOnPageChange: true
      });
      toast.present();
    }
    console.log(this.user) 
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }
}
