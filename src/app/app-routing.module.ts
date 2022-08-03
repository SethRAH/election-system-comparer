import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

const routes: Routes = [
  {path: '', redirectTo: '/gettingStarted', pathMatch: 'full'},
  { path: 'gettingStarted', component: GettingStartedComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
