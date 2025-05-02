import { Module } from '@nestjs/common';
import { MLController } from './controller/ml.controller';
import { MLService } from './service/ml.service';

@Module({
  controllers: [MLController],
  providers: [MLService],
})
export class MLModule {}