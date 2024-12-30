import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page47PageRoutingModule } from './page47-routing.module';

import { Page47Page } from './page47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page47PageRoutingModule
  ],
  declarations: [Page47Page]
})
export class Page47PageModule {}
