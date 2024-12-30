import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page50PageRoutingModule } from './page50-routing.module';

import { Page50Page } from './page50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page50PageRoutingModule
  ],
  declarations: [Page50Page]
})
export class Page50PageModule {}
