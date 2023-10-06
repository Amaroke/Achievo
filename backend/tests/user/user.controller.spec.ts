import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/user/user.controller';
import { UserService } from '../../src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.model';

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        createUser: jest.fn(),
                    },
                },
            ],
        }).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(userController).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const users: User[] = [];
            (userService.findAll as jest.Mock).mockResolvedValue(users);

            const result = await userController.findAll();
            expect(result).toEqual(users);
        });
    });

    describe('findOne', () => {
        it('should return a user by ID', async () => {
            const userId = 'someUserId';
            const user: User = null;
            (userService.findOne as jest.Mock).mockResolvedValue(user);

            const result = await userController.findOne(userId);
            expect(result).toEqual(user);
        });
    });

    describe('createUser', () => {
        it('should create a new user', async () => {
            const createUserDto: CreateUserDto = {
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123',
            };
            const createdUser: User = null;
            (userService.createUser as jest.Mock).mockResolvedValue(createdUser);

            const result = await userController.createUser(createUserDto);
            expect(result).toEqual(createdUser);
        });
    });

});
