import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental2PageRoutingModule } from './davao-oriental2-routing.module';

import { DavaoOriental2Page } from './davao-oriental2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental2PageRoutingModule
  ],
  declarations: [DavaoOriental2Page]
})
export class DavaoOriental2PageModule {}
