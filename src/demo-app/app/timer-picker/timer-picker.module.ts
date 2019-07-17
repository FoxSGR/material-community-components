import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MccTimerPickerModule } from '../../../lib';
import { TimerPickerApiComponent } from './components/timer-picker-api.component';
import { TimerPickerExamplesComponent } from './components/timer-picker-examples.component';
import { TimerPickerComponent } from './timer-picker.component';
import { routes } from './timer-picker.router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MccTimerPickerModule,
  ],
  declarations: [TimerPickerComponent, TimerPickerApiComponent, TimerPickerExamplesComponent],
})
export class TimerPickerModule { }
