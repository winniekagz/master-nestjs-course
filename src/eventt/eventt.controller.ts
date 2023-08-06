import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createEventsDto, updatedEventsDto } from './eventsdto';
import { Event } from './eventt.entity';
const testarr = [
  {
    name: 'win',
    id: '1',
  },
  {
    name: 'me',
    id: '2',
  },
];

@Controller('events')
export class EventtController {
  private events: Event[] = [];
  @Get()
  @HttpCode(200)
  findAll() {
    return this.events;
  }
  @Get(':id')
  @HttpCode(200)
  findOne(@Param() id) {
    const event = this.events.find((event) => event.id === parseInt(id));
    return event;
  }
  @Post()
  @HttpCode(201)
  create(@Body() input: createEventsDto) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    this.events.push(event);
    return event;
  }
  @Patch(':id')
  @HttpCode(201)
  update(@Param() id, @Body() input: updatedEventsDto) {
    const index = this.events.findIndex((event) => event.id === parseInt(id));

    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };
    return this.events[index];
  }
  @Delete(':id')
  @HttpCode(200)
  remove(@Param() id) {
    this.events = this.events.filter((events) => events.id !== parseInt(id));
  }
}
