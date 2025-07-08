import { Route } from '@angular/router';

export const realTimeFeedbackRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./real-time-feedback-system.component').then((c) => c.RealTimeFeedbackComponent),
  },
];