import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page52PageRoutingModule } from './page52-routing.module';

import { Page52Page } from './page52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page52PageRoutingModule
  ],
  declarations: [Page52Page]
})
export class Page52PageModule {}
