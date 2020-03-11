import { NgModule } from "@angular/core";

import { SharedModule } from '../../modules/shared.module';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TableHeadComponent,
    TableRowComponent,
    TableComponent
  ],
  exports: [
    TableHeadComponent,
    TableRowComponent,
    TableComponent
  ]
})
export class TableModule {}
