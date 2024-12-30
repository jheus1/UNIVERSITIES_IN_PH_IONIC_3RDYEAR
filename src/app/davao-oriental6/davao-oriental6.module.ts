import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental6PageRoutingModule } from './davao-oriental6-routing.module';

import { DavaoOriental6Page } from './davao-oriental6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental6PageRoutingModule
  ],
  declarations: [DavaoOriental6Page]
})
export class DavaoOriental6PageModule {}
