import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor3PageRoutingModule } from './siquirjor3-routing.module';

import { Siquirjor3Page } from './siquirjor3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor3PageRoutingModule
  ],
  declarations: [Siquirjor3Page]
})
export class Siquirjor3PageModule {}
