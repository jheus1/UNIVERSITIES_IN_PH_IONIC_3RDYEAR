import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental1PageRoutingModule } from './davao-oriental1-routing.module';

import { DavaoOriental1Page } from './davao-oriental1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental1PageRoutingModule
  ],
  declarations: [DavaoOriental1Page]
})
export class DavaoOriental1PageModule {}
