import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental8PageRoutingModule } from './davao-oriental8-routing.module';

import { DavaoOriental8Page } from './davao-oriental8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental8PageRoutingModule
  ],
  declarations: [DavaoOriental8Page]
})
export class DavaoOriental8PageModule {}
