
import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';



@Component({
  templateUrl: 'modalSearch.html'
})
export class modalSearch {

  channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
  playlists: Observable<any[]>;

  constructor(public NavController: NavController) { }

  closeSearchModal(){
    this.NavController.pop();
  }


 

}

