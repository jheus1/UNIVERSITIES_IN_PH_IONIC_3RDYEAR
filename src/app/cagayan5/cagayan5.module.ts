import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan5PageRoutingModule } from './cagayan5-routing.module';

import { Cagayan5Page } from './cagayan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan5PageRoutingModule
  ],
  declarations: [Cagayan5Page]
})
export class Cagayan5PageModule {}
