import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as poseDetection from '@tensorflow-models/pose-detection';

export const ML_URL = 'ml';

@Injectable({
    providedIn: 'root',
  })
  export class MLService {
    private httpClient = inject(HttpClient);

    poses() {
      const url = `${ML_URL}/poses`;
      return this.httpClient.get<poseDetection.Pose[]>(url);
    }

  }