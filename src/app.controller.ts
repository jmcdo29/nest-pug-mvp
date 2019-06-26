import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('/message')
  @Render('message')
  getMessage(): { message: string } {
    return this.appService.getMessage();
  }
}
