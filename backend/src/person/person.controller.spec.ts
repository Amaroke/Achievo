import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

describe('PersonController', () => {
  let personController: PersonController;
  let personService: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    personController = module.get<PersonController>(PersonController);
    personService = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(personController).toBeDefined();
  });

  describe('create', () => {
    it('should create a person and return it', async () => {
      const personData = { firstname: 'John', lastname: 'Doe', entity: 'Example Entity' };
      const createdPerson = { id: 1, ...personData }; // Simuler la réponse du service

      jest.spyOn(personService, 'createPerson').mockResolvedValue(createdPerson);

      const result = await personController.create(personData);
      expect(result).toEqual(createdPerson);
    });
  });
});
