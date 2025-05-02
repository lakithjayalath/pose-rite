import { Controller, Get, Query } from '@nestjs/common';
import { MLService } from '../service/ml.service';

@Controller('ml')
export class MLController {
  constructor(private readonly mlService: MLService) {}

  @Get('predict')
  async predict(@Query('input') input: number) {
    if (!input) throw new Error('Input query parameter is required (e.g., /predict?input=5)');
    const result = await this.mlService.trainAndPredict(Number(input));
    return { input, prediction: result };
  }

  @Get('poses')
  async poses() {
    const result = await this.mlService.detectPose();
    return result;
  }
}