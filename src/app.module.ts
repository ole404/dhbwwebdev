import { GuessModule } from './guess/guess.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionModule } from 'nestjs-session';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    GuessModule, SessionModule.forRoot({
      session: { secret: 'keyboard cat' },
    }), ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
