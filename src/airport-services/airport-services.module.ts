import { Module } from '@nestjs/common';
import { AirportServicesService } from './airport-services.service';
import { AirportServicesController } from './airport-services.controller';

@Module({
  controllers: [AirportServicesController],
  providers: [AirportServicesService],
})
export class AirportServicesModule {}
