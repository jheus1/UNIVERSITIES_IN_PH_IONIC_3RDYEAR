import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte6PageRoutingModule } from './leyte6-routing.module';

import { Leyte6Page } from './leyte6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte6PageRoutingModule
  ],
  declarations: [Leyte6Page]
})
export class Leyte6PageModule {}
