import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MLModule } from './ml/ml.module';

@Module({
  imports: [MLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
