import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfUsersComponent } from './list-of-users.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListOfUsersComponent],
  exports: [ListOfUsersComponent]
})
export class ListOfUsersModule {}
