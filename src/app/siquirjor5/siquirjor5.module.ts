import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Siquirjor5PageRoutingModule } from './siquirjor5-routing.module';

import { Siquirjor5Page } from './siquirjor5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Siquirjor5PageRoutingModule
  ],
  declarations: [Siquirjor5Page]
})
export class Siquirjor5PageModule {}
