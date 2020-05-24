import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {
    path: '', component: AppComponent
  }
];

const CONFIG: ExtraOptions = {
  useHash: false,
  paramsInheritanceStrategy: 'always',
  initialNavigation: 'enabled',
  enableTracing: false,
  scrollPositionRestoration: 'top'
};

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, CONFIG)],
  exports: [RouterModule]
})
export class RoutingModule {}
