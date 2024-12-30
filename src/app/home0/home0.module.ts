import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home0PageRoutingModule } from './home0-routing.module';

import { Home0Page } from './home0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home0PageRoutingModule
  ],
  declarations: [Home0Page]
})
export class Home0PageModule {}
