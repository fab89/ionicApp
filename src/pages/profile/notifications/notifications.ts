import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NavParams } from 'ionic-angular/navigation/nav-params';



@Component({
  templateUrl: 'notifications.html'
})
export class notificationPage {

  constructor(public NavController: NavController, public params: NavParams) {

   }

  backToProfile(){
    this.NavController.pop();
   }

}

