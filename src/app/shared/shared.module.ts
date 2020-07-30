import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Components*/
import { ActionItemComponent } from './components/action-item/action-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ActionItemComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, ActionItemComponent],
})
export class SharedModule {}
