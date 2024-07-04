import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { SelectComponent } from './component/select/select.component';
import { NavbarComponent } from './component/navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    SelectComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[

    FooterComponent,
    NavbarComponent

  ]
})
export class SharedModule { }
