import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpyPage } from './spy.page';

const routes: Routes = [
  {
    path: '',
    component: SpyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpyPageRoutingModule {}
