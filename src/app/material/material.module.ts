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
  MatProgressSpinnerModule,
  MatStepperModule
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
    MatProgressSpinnerModule,
    MatStepperModule
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
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  declarations: []
})
export class MaterialModule { }
