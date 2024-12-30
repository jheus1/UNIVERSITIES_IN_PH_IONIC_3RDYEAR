import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page33PageRoutingModule } from './page33-routing.module';

import { Page33Page } from './page33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page33PageRoutingModule
  ],
  declarations: [Page33Page]
})
export class Page33PageModule {}
