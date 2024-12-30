import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental7PageRoutingModule } from './davao-oriental7-routing.module';

import { DavaoOriental7Page } from './davao-oriental7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental7PageRoutingModule
  ],
  declarations: [DavaoOriental7Page]
})
export class DavaoOriental7PageModule {}
