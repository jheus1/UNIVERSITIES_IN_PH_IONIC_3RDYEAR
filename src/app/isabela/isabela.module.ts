import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsabelaPageRoutingModule } from './isabela-routing.module';

import { IsabelaPage } from './isabela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsabelaPageRoutingModule
  ],
  declarations: [IsabelaPage]
})
export class IsabelaPageModule {}
