import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino3PageRoutingModule } from './quirino3-routing.module';

import { Quirino3Page } from './quirino3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino3PageRoutingModule
  ],
  declarations: [Quirino3Page]
})
export class Quirino3PageModule {}
