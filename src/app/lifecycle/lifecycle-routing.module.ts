import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cat } from './lifecycle.page';

const routes: Routes = [
  {
    path: '',
    component: Cat
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifecyclePageRoutingModule {}
