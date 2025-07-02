import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExerciseSelectionComponent } from './modules/exercise-selection/exercise-selection.component';

@Component({
  imports: [ExerciseSelectionComponent, RouterModule],
  selector: 'pose-rite-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pose-rite';
}
