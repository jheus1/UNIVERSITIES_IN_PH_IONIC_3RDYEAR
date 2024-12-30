import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay3PageRoutingModule } from './albay3-routing.module';

import { Albay3Page } from './albay3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay3PageRoutingModule
  ],
  declarations: [Albay3Page]
})
export class Albay3PageModule {}
