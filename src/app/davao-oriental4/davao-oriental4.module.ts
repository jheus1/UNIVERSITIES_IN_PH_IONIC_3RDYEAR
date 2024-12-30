import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental4PageRoutingModule } from './davao-oriental4-routing.module';

import { DavaoOriental4Page } from './davao-oriental4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental4PageRoutingModule
  ],
  declarations: [DavaoOriental4Page]
})
export class DavaoOriental4PageModule {}
