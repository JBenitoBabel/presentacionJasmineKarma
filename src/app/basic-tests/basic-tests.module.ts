import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicTestsPageRoutingModule } from './basic-tests-routing.module';

import { BasicTestsPage } from './basic-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicTestsPageRoutingModule
  ],
  declarations: [BasicTestsPage]
})
export class BasicTestsPageModule {}
