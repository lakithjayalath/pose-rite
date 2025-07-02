import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as poseDetection from '@tensorflow-models/pose-detection';

export const ML_URL = 'http://localhost:3000/api/ml';

@Injectable({
    providedIn: 'root',
  })
  export class MLService {
    private httpClient = inject(HttpClient);

    detectPoses() {
      const url = `${ML_URL}/poses`;
      return this.httpClient.get<poseDetection.Pose[]>(url);
    }
  }