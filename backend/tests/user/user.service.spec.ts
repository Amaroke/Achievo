import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/user/user.service';
import { User } from 'src/user/user.model';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

const mockUserService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    createUser: jest.fn(),
};

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: UserService,
                    useValue: mockUserService,
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const users: User[] = [];
            mockUserService.findAll.mockResolvedValue(users);

            const result = await service.findAll();
            expect(result).toEqual(users);
        });
    });

    describe('findOne', () => {
        it('should return a user by ID', async () => {
            const userId = 'someUserId';
            const user: User = null;
            mockUserService.findOne.mockResolvedValue(user);

            const result = await service.findOne(userId);
            expect(result).toEqual(user);
        });
    });

    describe('createUser', () => {
        it('should create a new user', async () => {
            const createUserDto: CreateUserDto = {
                username: 'username',
                email: 'email',
                password: 'password'
            };
            const createdUser: User = null;
            mockUserService.createUser.mockResolvedValue(createdUser);

            const result = await service.createUser(createUserDto);
            expect(result).toEqual(createdUser);
        });
    });

});
