import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  XLengthFlag = false;
  YLengthFlag = false;
  ZLengthFlag = false;
  ShowFlag = false;
  ShowText = 'Show more';
  XLength: any;
  YLength: any;
  ZLength: any;

  Inputjudge() {
    this.XLengthFlag = (this.XLength === null) || (this.XLength === '');
    this.YLengthFlag = (this.YLength === null) || (this.YLength === '');
    this.ZLengthFlag = (this.ZLength === null) || (this.ZLength === '');
    if (!(this.XLengthFlag || this.YLengthFlag || this.ZLengthFlag)) {
      console.log(`XLength:${this.XLength}cm; YLength:${this.YLength}cm; ZLength:${this.ZLength}cm;`);
    }
  }

  Showjudge() {
    this.ShowFlag = !this.ShowFlag;
    if (this.ShowFlag) {this.ShowText = 'Hide'; } else {this.ShowText = 'Show more'; }
  }

  constructor() { }

  ngOnInit() {
  }

}
