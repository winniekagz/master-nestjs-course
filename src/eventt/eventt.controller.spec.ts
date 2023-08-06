import { Test, TestingModule } from '@nestjs/testing';
import { EventtController } from './eventt.controller';

describe('EventtController', () => {
  let controller: EventtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventtController],
    }).compile();

    controller = module.get<EventtController>(EventtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
