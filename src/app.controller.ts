import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getHello() {
    return this.prismaService.notification.findMany();
  }
}
