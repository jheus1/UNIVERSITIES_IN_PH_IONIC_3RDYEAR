import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page55PageRoutingModule } from './page55-routing.module';

import { Page55Page } from './page55.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page55PageRoutingModule
  ],
  declarations: [Page55Page]
})
export class Page55PageModule {}
