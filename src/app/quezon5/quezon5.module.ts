import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon5PageRoutingModule } from './quezon5-routing.module';

import { Quezon5Page } from './quezon5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon5PageRoutingModule
  ],
  declarations: [Quezon5Page]
})
export class Quezon5PageModule {}
