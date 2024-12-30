import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin5PageRoutingModule } from './camiguin5-routing.module';

import { Camiguin5Page } from './camiguin5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin5PageRoutingModule
  ],
  declarations: [Camiguin5Page]
})
export class Camiguin5PageModule {}
