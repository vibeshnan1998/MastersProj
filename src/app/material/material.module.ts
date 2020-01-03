import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
  Material.MatSlideToggleModule,
  Material.MatCardModule,
  Material.MatSnackBarModule,
  Material.MatTableModule,
  Material.MatIconModule,
  Material.MatSortModule,
  Material.MatPaginatorModule,
  Material.MatDialogModule,
  Material.MatMenuModule,
  Material.MatSelectModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatSlideToggleModule,
    Material.MatCardModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
  Material.MatDialogModule,
  Material.MatMenuModule,
  Material.MatSelectModule
   ]
})
export class MaterialModule { }
