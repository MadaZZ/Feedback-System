import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  lat: number = 30.517609;
  lng: number = 76.659570;

  constructor() { }

  ngOnInit() {
  }

}
