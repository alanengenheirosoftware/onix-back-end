import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportsModule } from './airports/airports.module';
import { OperationsModule } from './operations/operations.module';
import { AirportServicesModule } from './airport-services/airport-services.module';

@Module({
  imports: [AirportsModule, OperationsModule, AirportServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
