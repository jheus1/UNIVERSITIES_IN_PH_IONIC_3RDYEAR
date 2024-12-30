import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental5PageRoutingModule } from './davao-oriental5-routing.module';

import { DavaoOriental5Page } from './davao-oriental5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental5PageRoutingModule
  ],
  declarations: [DavaoOriental5Page]
})
export class DavaoOriental5PageModule {}
