import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideHeadder: Boolean;


  constructor() {
   }

  ngOnInit() {}

  sideBarClicked($event) {
    const elementClassName = document.getElementById('main-body-attr').className;

    if (elementClassName === 'sidebar-collapse'){
      this.hideHeadder = true;
    } else {
      this.hideHeadder = false;
    }
  }
}
