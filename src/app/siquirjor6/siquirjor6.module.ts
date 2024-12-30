import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor6PageRoutingModule } from './siquirjor6-routing.module';

import { Siquirjor6Page } from './siquirjor6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor6PageRoutingModule
  ],
  declarations: [Siquirjor6Page]
})
export class Siquirjor6PageModule {}
