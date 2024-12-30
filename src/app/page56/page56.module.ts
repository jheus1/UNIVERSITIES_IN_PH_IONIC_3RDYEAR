import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page56PageRoutingModule } from './page56-routing.module';

import { Page56Page } from './page56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page56PageRoutingModule
  ],
  declarations: [Page56Page]
})
export class Page56PageModule {}
