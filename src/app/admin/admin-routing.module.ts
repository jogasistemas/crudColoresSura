import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ColorNewComponent } from './color-new/color-new.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorEditComponent } from './color-edit/color-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'colors/new',
        component: ColorNewComponent
      },
      {
        path: 'colors/:id',
        component: ColorEditComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
