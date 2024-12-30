import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page51PageRoutingModule } from './page51-routing.module';

import { Page51Page } from './page51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page51PageRoutingModule
  ],
  declarations: [Page51Page]
})
export class Page51PageModule {}
