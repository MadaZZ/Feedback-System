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
  MatStepperModule,
  MatSnackBarModule,
  MatExpansionModule
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
    MatStepperModule,
    MatSnackBarModule,
    MatExpansionModule
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
    MatStepperModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
