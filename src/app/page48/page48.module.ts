import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page48PageRoutingModule } from './page48-routing.module';

import { Page48Page } from './page48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page48PageRoutingModule
  ],
  declarations: [Page48Page]
})
export class Page48PageModule {}
