import { GuessService } from './guess.service';
import { GuessController } from './guess.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        GuessController,],
    providers: [
        GuessService,],
})
export class GuessModule { }
