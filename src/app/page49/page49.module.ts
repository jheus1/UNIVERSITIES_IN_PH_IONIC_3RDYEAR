import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page49PageRoutingModule } from './page49-routing.module';

import { Page49Page } from './page49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page49PageRoutingModule
  ],
  declarations: [Page49Page]
})
export class Page49PageModule {}
