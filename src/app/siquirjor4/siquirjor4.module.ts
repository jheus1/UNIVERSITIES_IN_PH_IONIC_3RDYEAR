import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor4PageRoutingModule } from './siquirjor4-routing.module';

import { Siquirjor4Page } from './siquirjor4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor4PageRoutingModule
  ],
  declarations: [Siquirjor4Page]
})
export class Siquirjor4PageModule {}
