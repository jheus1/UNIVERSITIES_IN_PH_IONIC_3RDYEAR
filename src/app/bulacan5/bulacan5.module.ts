import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan5PageRoutingModule } from './bulacan5-routing.module';

import { Bulacan5Page } from './bulacan5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan5PageRoutingModule
  ],
  declarations: [Bulacan5Page]
})
export class Bulacan5PageModule {}
