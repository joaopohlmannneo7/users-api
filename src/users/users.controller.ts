import { Body, Controller, Get, Header, HttpCode, HttpStatus, NotFoundException, Param, Post, Query, Res } from '@nestjs/common';
import { NestResponse } from 'src/core/http/nest-responde';
import { NestResponseBuilder } from 'src/core/http/nest-responnse-builder';
import { User } from './user.entity';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}


// /user/login
@Get(':login')
public getUserByLogin(@Param('login')login: string): User{
  const user = this.userService.searchByLogin(login)
  if(!user){
    throw new NotFoundException({
      statusCode: HttpStatus.NOT_FOUND,
      message: 'user not found',
    })
  }
  return user;
}

//users?page=0
    @Get()
  public getAll(@Query('page') page: number, @Query('size') size: number): Array<User> {
    console.log(page)
    console.log(size)
   return this.userService.getUsers();
    }


    @Post()
    public create(@Body() user: User): NestResponse{
    
      // if (!user.email){
      //   throw new  Error('preencha o e-mail')
      // }
      const userCreated = this.userService.create(user)
      return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        Location: `/users/${userCreated.login}`,
      })
      .withBody(userCreated)
      .build()
    }
    @Post(':login')
    @HttpCode(200)
    // @Header('x-teste', 'esse bilhete é falso')
    public validateUser(@Param('login') login: string){
      return{
        message: 'usuario validado',
      };
    }

}

// export class UsersController {
//   private userService 

//   constructor(userService: UsersService) {
//     this.userService = userService;
//   }

//     @Get()
//   public getAll() {
//    return this.userService.getUsers();
//     }


//     @Post()
//     public create(@Body() user){
//       this.userService.create(user)
//       return user;
//     }

// }