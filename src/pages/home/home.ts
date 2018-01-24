import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderController } from '../header/header'
import { Searchbar } from 'ionic-angular/components/searchbar/searchbar';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { modalSearch } from '../modalSearch/modalSearch';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { PostService } from '../../services/posts/post.service';
import { Post } from '../../interfaces/posts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any = [];
  tempPost: any = [];
  badgeCount: number = 10;
  page: number = 10;
  limitMax: number = 10;
  limitMin: number = 0;
  constructor(public navCtrl: NavController, public modalController: ModalController, public postsService: PostService) {

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
    console.log(this.limitMax);
    console.log(this.limitMin);
    console.log(this.tempPost.length);
    console.log('Async operation has ended');
    infiniteScroll.complete();
    }, 500);
    }

}
