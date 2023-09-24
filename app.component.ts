import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';
  image="./assets/image/cheetah.jpg";
  Kunal="./assets/image/kt.JPG";
  constructor(){
    setTimeout(()=>{
      this.Kunal="./assets/image/Kunalpicture.JPG";
    },5000);
  }
  Automate="./assets/image/automate.jpg";

  Bag="./assets/image/bag.png";

}
