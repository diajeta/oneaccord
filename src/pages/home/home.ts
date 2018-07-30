import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
   //   console.log(data);
    this.users = data as any;
    console.log(this.users);

    });
  }

}
