import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani1PageRoutingModule } from './sarangani1-routing.module';

import { Sarangani1Page } from './sarangani1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani1PageRoutingModule
  ],
  declarations: [Sarangani1Page]
})
export class Sarangani1PageModule {}
