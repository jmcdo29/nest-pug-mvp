import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello World!' };
  }

  getMessage(): { message: string } {
    return { message: 'This is my message' };
  }
}
