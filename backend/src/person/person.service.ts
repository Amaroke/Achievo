import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {
  constructor(@InjectModel('Person') private readonly personModel: Model<any>) {}

  async createPerson(personData: any) {
    const createdPerson = new this.personModel(personData);
    return createdPerson.save();
  }
}
