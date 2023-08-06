import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventtController } from './eventt/eventt.controller';

@Module({
  imports: [],
  controllers: [AppController, EventtController],
  providers: [AppService],
})
export class AppModule {}
