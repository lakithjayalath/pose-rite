import { Component } from '@angular/core';
import { REAL_TIME_FEEDBACK_IMPORTS } from './real-time-feedback-system.imports';

@Component({
  selector: 'pose-rite-real-time-feedback-system',
  imports: REAL_TIME_FEEDBACK_IMPORTS,
  templateUrl: './real-time-feedback-system.component.html',
  styleUrl: './real-time-feedback-system.component.scss'
})
export class RealTimeFeedbackComponent {

  warmUpText = 'Welcome Lakith, Before starting the workout I want to know whether you have warmed up before starting the workout';

  yesText = '5-7 minutes on treadmill or stationary bike, 10 Ninety Nineties, 10 leg swings';

  noText = 'Then we can move on with the workout';

  // constructor() {
  //   this.speak(this.warmUpText);
  // }

  // In your Angular component
speak() {
  const utterance = new SpeechSynthesisUtterance(this.warmUpText);
  utterance.lang = 'en-US'; // Set language
  utterance.rate = 1.1;     // Adjust speed if needed
  window.speechSynthesis.speak(utterance);
}

yes() {
  const utterance = new SpeechSynthesisUtterance(this.yesText);
  utterance.lang = 'en-US'; // Set language
  utterance.rate = 1.1;     // Adjust speed if needed
  window.speechSynthesis.speak(utterance);
}

no() {
  const utterance = new SpeechSynthesisUtterance(this.noText);
  utterance.lang = 'en-US'; // Set language
  utterance.rate = 1.1;     // Adjust speed if needed
  window.speechSynthesis.speak(utterance);
}

}
