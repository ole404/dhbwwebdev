import { Injectable } from '@nestjs/common';

@Injectable()
export class GuessService {
    computerNumber(){
        return Math.floor(Math.random() * (100 - 1)) +1
    }
    haveAGuess(playerNumber, computerNumber){
        if(playerNumber == computerNumber){
            return {win: true}
        }
        else if(playerNumber != computerNumber){
            return{
                win: false,
                higher: playerNumber < computerNumber ? true : false
            }
        }
    }
}
