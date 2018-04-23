import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
    ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
