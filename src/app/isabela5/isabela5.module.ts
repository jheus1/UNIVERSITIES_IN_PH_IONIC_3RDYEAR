import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela5PageRoutingModule } from './isabela5-routing.module';

import { Isabela5Page } from './isabela5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela5PageRoutingModule
  ],
  declarations: [Isabela5Page]
})
export class Isabela5PageModule {}
