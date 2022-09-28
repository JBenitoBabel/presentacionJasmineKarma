import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifecyclePageRoutingModule } from './lifecycle-routing.module';

import { Cat } from './lifecycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifecyclePageRoutingModule
  ],
  declarations: [Cat]
})
export class LifecyclePageModule {}
