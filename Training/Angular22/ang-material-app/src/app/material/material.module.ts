import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
})
export class MaterialModule {}
