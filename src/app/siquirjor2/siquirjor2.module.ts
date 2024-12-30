import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor2PageRoutingModule } from './siquirjor2-routing.module';

import { Siquirjor2Page } from './siquirjor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor2PageRoutingModule
  ],
  declarations: [Siquirjor2Page]
})
export class Siquirjor2PageModule {}
