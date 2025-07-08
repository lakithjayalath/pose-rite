import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
{
    path: '',
    loadChildren: () =>
      import('./modules/exercise-selection/exercise-selection.routes').then((r) => r.exserciseSelectionRoute),
  },
    {
    path: 'feedback',
    loadChildren: () =>
      import('./modules/real-time-feedback-system/real-time-feedback-system.routes').then((r) => r.realTimeFeedbackRoute),
  },
    ]}
];
