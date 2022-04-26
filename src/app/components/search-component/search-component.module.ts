import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { SearchComponentComponent } from './search-component.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, Ng2SearchPipeModule],
  declarations: [SearchComponentComponent],
  exports: [SearchComponentComponent]
})
export class SearchComponentModule {}
