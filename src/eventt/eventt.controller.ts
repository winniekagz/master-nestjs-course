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
  @Get()
  @HttpCode(200)
  findAll() {}
  @Get(':id')
  @HttpCode(200)
  findOne(@Param() id) {
    return testarr;
  }
  @Post()
  @HttpCode(201)
  create(@Body() input: createEventsDto) {
    return input;
  }
  @Patch(':id')
  @HttpCode(201)
  update(@Param() id, @Body() input: updatedEventsDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(200)
  remove(@Param() id) {
    return id;
  }
}
