import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page54PageRoutingModule } from './page54-routing.module';

import { Page54Page } from './page54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page54PageRoutingModule
  ],
  declarations: [Page54Page]
})
export class Page54PageModule {}
