import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs';
import * as tfcore from '@tensorflow/tfjs-core';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import sharp from 'sharp'; 
import { readFileSync } from 'fs';

@Injectable()
export class MLService {
  async trainAndPredict(input: number): Promise<number> {
    // Define a simple sequential model
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Compile the model
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Training data (y = 2x)
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

    // Train the model (10 epochs)
    await model.fit(xs, ys, { epochs: 10 });

    // Predict
    const output = model.predict(tf.tensor2d([input], [1, 1])) as tf.Tensor;
    const prediction = (await output.data())[0]; // Extract value

    // Clean up tensors to avoid memory leaks
    tf.dispose([xs, ys, output]);
    
    return prediction;
  }

  async detectPose(): Promise<poseDetection.Pose[]> {
    const model = poseDetection.SupportedModels.BlazePose;
    const detectorConfig = {
      runtime: 'tfjs',
      enableSmoothing: true,
      modelType: 'full'
    };
    const detector = await poseDetection.createDetector(model, detectorConfig);
    const estimationConfig = {enableSmoothing: true};
    const timestamp = performance.now();

    // 1. Load image from file
    const imagePath = 'apps/pose-rite-api/src/assets/burpee.png';  // Path relative to project root
    const imageBuffer = readFileSync(imagePath);

    // 2. Decode image to tensor (shape: [height, width, 3])
    const { data, info } = await sharp(imageBuffer)
      .removeAlpha()  // Remove alpha channel (if exists)
      .raw()
      .toBuffer({ resolveWithObject: true });

      const imageTensor = tf.tensor3d(
        data,  // RGB pixel data
        [info.height, info.width, 3],  // Shape: [height, width, channels]
        'int32'
      );

    const poses = await detector.estimatePoses(imageTensor);

    imageTensor.dispose();
    return poses;
  }
}