import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor1PageRoutingModule } from './siquirjor1-routing.module';

import { Siquirjor1Page } from './siquirjor1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor1PageRoutingModule
  ],
  declarations: [Siquirjor1Page]
})
export class Siquirjor1PageModule {}
