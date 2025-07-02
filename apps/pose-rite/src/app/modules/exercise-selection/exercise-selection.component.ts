import { Component } from '@angular/core';
import { EXPORT_SELECTION_IMPORTS } from './exercise-selection.imports';

@Component({
  selector: 'pose-rite-exercise-selection',
  imports: EXPORT_SELECTION_IMPORTS,
  templateUrl: './exercise-selection.component.html',
  styleUrl: './exercise-selection.component.scss'
})
export class ExerciseSelectionComponent {}
