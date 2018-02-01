import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderController } from '../header/header'
import { Searchbar } from 'ionic-angular/components/searchbar/searchbar';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { modalSearch } from '../modalSearch/modalSearch';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { PostService } from '../../services/posts/post.service';
import { Post } from '../../interfaces/posts';
import { ContactService } from '../../services/contacts/contacts.service';
import { HttpClient } from '@angular/common/http';
import { modalComments } from '../modalComments/modalComments';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any = [];
  tempPost: any = [];
  public badgeCount: number = 0;
  page: number = 10;
  contacts: any = [];
  limitMax: number = 10;
  limitMin: number = 0;
  homeLayers = 'news';
  comments: any = [];

  constructor(public navCtrl: NavController, 
    public modalController: ModalController, 
    public postsService: PostService, 
    public contactList: ContactService, 
    public http: HttpClient,
    public menu: MenuController) {
    menu.enable(true);
  }

  ngOnInit() {

    this.postsService.getPosts(this.page).subscribe(
      response => {
        this.tempPost = response
        for(let i= this.limitMin; i<this.limitMax; i++) {
          this.posts.push(this.tempPost[i])
        }
        console.log(this.posts)
      }      
    )

    this.contactList.getContactList().subscribe(
      response => {
        this.contacts = response
        console.log(this.contacts, "amici online")
      }
    )
  }

  getSearchbar(){
    let modal: Modal = this.modalController.create(modalSearch);
    modal.present();
    console.log('modale')
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    
    setTimeout(() => {
    this.limitMax = this.limitMax + 10;
    this.limitMin = this.limitMin + 10;
    if(this.limitMax <= this.tempPost.length){
      for(let i= this.limitMin; i<this.limitMax; i++) {
        this.posts.push(this.tempPost[i])
      }
    }
    infiniteScroll.complete();
    }, 500);
    }

    getCommentList(){
      let getCommentApi = 'http://jsonplaceholder.typicode.com/comments';
      this.http.get(getCommentApi).subscribe(
       response => {
         this.comments = response;
         console.log(this.comments, 'commenti')
         let modal: Modal = this.modalController.create(modalComments, {'comments': this.comments});
         modal.onDidDismiss(comments => {});
         modal.present();
       }
      );
    }

    getLike(e){
      this.badgeCount++
      console.log(this.badgeCount)
    }

}
