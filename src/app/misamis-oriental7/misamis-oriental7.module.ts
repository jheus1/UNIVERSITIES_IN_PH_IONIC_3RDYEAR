import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental7PageRoutingModule } from './misamis-oriental7-routing.module';

import { MisamisOriental7Page } from './misamis-oriental7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental7PageRoutingModule
  ],
  declarations: [MisamisOriental7Page]
})
export class MisamisOriental7PageModule {}
