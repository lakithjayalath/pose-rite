import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EXCERCISE_SELECTION_IMPORTS } from './exercise-selection.imports';

@Component({
  selector: 'pose-rite-exercise-selection',
  imports: EXCERCISE_SELECTION_IMPORTS,
  templateUrl: './exercise-selection.component.html',
  styleUrl: './exercise-selection.component.scss'
})
export class ExerciseSelectionComponent {
  private router = inject(Router);

navigateToFeedback() {
  this.router.navigate(['/feedback'])
}
}
