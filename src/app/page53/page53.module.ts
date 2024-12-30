import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page53PageRoutingModule } from './page53-routing.module';

import { Page53Page } from './page53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page53PageRoutingModule
  ],
  declarations: [Page53Page]
})
export class Page53PageModule {}
