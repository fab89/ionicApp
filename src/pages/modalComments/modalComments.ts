import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NavParams } from 'ionic-angular/navigation/nav-params';



@Component({
  templateUrl: 'modalComments.html'
})
export class modalComments {

  comments: any[];
  
  constructor(public NavController: NavController, public params: NavParams) {
    this.comments = this.params.get("comments");
    console.log(this.comments, "modale")
   }

  closeSearchModal(){
    this.NavController.pop();
  }
 

}

