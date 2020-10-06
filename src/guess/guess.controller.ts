import { Controller, Get, Render, Session, Post, Body, Res } from '@nestjs/common';
import { GuessService } from './guess.service';
import { Response } from 'express';

@Controller('guess')
export class GuessController {
    constructor(private guessService: GuessService){}
    @Get()
    @Render('guess')
    firstGuess(@Session() player){
        player.computerNumber = undefined
        player.try = undefined
        return{
            username: player.username
        }
    }
    @Post()
    guess(  
        @Session() player, 
        @Body() game, 
        @Res() res: Response
        ){

        // Trycounter
        player.try = (player.try || 0) + 1;
        // Computer Number on Server
        player.computerNumber = (player.computerNumber || this.guessService.computerNumber())
        // Game interaction
        console.log(player.computerNumber)
        const lastGuess = this.guessService.haveAGuess(game.number, player.computerNumber)
        //Render next Game Screen
        if (lastGuess.win){
            return res.render('win.pug',
                {
                    username: player.username,
                    lasttry: player.try
                }
            )
        }
        else {
            return res.render("retry.pug",    
                {
                    username: player.username,
                    lasttry: player.try,
                    lastnumber: game.number,
                    higher: lastGuess.higher
                }
            )
        }

        
    }
}
