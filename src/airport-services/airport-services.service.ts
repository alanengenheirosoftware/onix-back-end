import { Injectable } from '@nestjs/common';
import { CreateAirportServiceDto } from './dto/create-airport-service.dto';
import { UpdateAirportServiceDto } from './dto/update-airport-service.dto';

@Injectable()
export class AirportServicesService {
  create(createAirportServiceDto: CreateAirportServiceDto) {
    return 'This action adds a new airportService';
  }

  findAll() {
    return `This action returns all airportServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} airportService`;
  }

  update(id: number, updateAirportServiceDto: UpdateAirportServiceDto) {
    return `This action updates a #${id} airportService`;
  }

  remove(id: number) {
    return `This action removes a #${id} airportService`;
  }
}
