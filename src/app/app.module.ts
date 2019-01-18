import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './scanner/scanner.component';
import { SetscannerComponent } from './setscanner/setscanner.component';
import { SetCTscannerComponent } from './set-ctscanner/set-ctscanner.component';
import { SetcylindricalPETComponent } from './setcylindrical-pet/setcylindrical-pet.component';
import { SetCPETComponent } from './set-cpet/set-cpet.component';
import { SetSPECTheadComponent } from './set-specthead/set-specthead.component';
import { SetecatComponent } from './setecat/setecat.component';
import { SetecatAccelComponent } from './setecat-accel/setecat-accel.component';
import { SetOPETComponent } from './set-opet/set-opet.component';
import { SetOpticalSystemComponent } from './set-optical-system/set-optical-system.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    ScannerComponent,
    SetscannerComponent,
    SetCTscannerComponent,
    SetcylindricalPETComponent,
    SetCPETComponent,
    SetSPECTheadComponent,
    SetecatComponent,
    SetecatAccelComponent,
    SetOPETComponent,
    SetOpticalSystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
