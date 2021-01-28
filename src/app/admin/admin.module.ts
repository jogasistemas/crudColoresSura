import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './colors/components/color/color.component';
import { ColorService } from './services/color.service';
import { PaginatorComponent } from './colors/components/paginator/paginator.component';
import { ColorNewComponent } from './color-new/color-new.component';
import { ColorFormComponent } from './common/color-form/color-form.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorEditComponent } from './color-edit/color-edit.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ColorComponent,
    PaginatorComponent,
    ColorNewComponent,
    ColorFormComponent,
    ColorsComponent,
    ColorEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ColorService
  ]
})
export class AdminModule { }
