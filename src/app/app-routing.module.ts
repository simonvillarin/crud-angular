import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: AddComponent,
    path: 'add',
  },
  {
    component: EditComponent,
    path: 'edit/:id',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
