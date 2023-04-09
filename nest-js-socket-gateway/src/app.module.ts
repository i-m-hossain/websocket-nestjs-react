import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [BlogModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
