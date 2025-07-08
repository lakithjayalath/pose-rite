import { Route } from '@angular/router';

export const exserciseSelectionRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./exercise-selection.component').then((c) => c.ExerciseSelectionComponent),
  },
];