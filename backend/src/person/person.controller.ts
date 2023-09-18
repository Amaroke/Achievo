import { Controller, Post, Body } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() personData: any) {
    const createdPerson = await this.personService.createPerson(personData);
    return createdPerson;
  }
}
