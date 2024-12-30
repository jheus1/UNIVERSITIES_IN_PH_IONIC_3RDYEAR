import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental9PageRoutingModule } from './davao-oriental9-routing.module';

import { DavaoOriental9Page } from './davao-oriental9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental9PageRoutingModule
  ],
  declarations: [DavaoOriental9Page]
})
export class DavaoOriental9PageModule {}
