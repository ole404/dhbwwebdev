import { Controller, Get, Render, Post, Redirect, Session, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Render("login")
  @Get()
  getHello(){}
  
  
  @Post()
  @Redirect("/guess", 303)
  register(@Session() player, @Body() body){
    player.username = body.username
  }
}
