import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'my-header',
  templateUrl: 'header.html'
})
export class HeaderController {

  constructor(public navCtrl: NavController) {

  }

}
