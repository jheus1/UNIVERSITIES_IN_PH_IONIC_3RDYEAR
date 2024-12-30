import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page57PageRoutingModule } from './page57-routing.module';

import { Page57Page } from './page57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page57PageRoutingModule
  ],
  declarations: [Page57Page]
})
export class Page57PageModule {}
