import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  ShowFlag = false;
  ShowText = 'Show more';
  ScannerType: any;
  scannerflag = false;
  CTscannerflag = false;
  cylindricalPETflag = false;
  CPETflag = false;
  SPECTheadflag = false;
  ecatflag = false;
  ecatAccelflag = false;
  OPETflag = false;
  OpticalSystemflag = false;

  Showjudge() {
    this.ShowFlag = !this.ShowFlag;
    if (this.ShowFlag) {this.ShowText = 'Hide'; } else {this.ShowText = 'Show more'; }
  }

  CloseAll() {
    this.scannerflag = false;
    this.CTscannerflag = false;
    this.cylindricalPETflag = false;
    this.CPETflag = false;
    this.SPECTheadflag = false;
    this.ecatflag = false;
    this.ecatAccelflag = false;
    this.OPETflag = false;
    this.OpticalSystemflag = false;

  }

  ChooseScannerType(event: any) {
    switch (event) {
      case 'scanner':
        this.CloseAll();
        this.scannerflag = true;
        break;
      case 'CTscanner':
        this.CloseAll();
        this.CTscannerflag = true;
        break;
      case 'CPET':
        this.CloseAll();
        this.CPETflag = true;
        break;
      case 'cylindricalPET':
        this.CloseAll();
        this.cylindricalPETflag = true;
        break;
      case 'SPECThead':
        this.CloseAll();
        this.SPECTheadflag = true;
        break;
      case 'ecat':
        this.CloseAll();
        this.ecatflag = true;
        break;
      case 'ecatAccel':
        this.CloseAll();
        this.ecatAccelflag = true;
        break;
      case 'OPET':
        this.CloseAll();
        this.OPETflag = true;
        break;
      case 'OpticalSystem':
        this.CloseAll();
        this.OpticalSystemflag = true;
        break;
      default:
        this.CloseAll();

    }
  }


  constructor() { }

  ngOnInit() {
  }

}
