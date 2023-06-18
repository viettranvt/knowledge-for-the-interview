# NESTJS

## Pipe

- Gồm 2 thành phần:

  1. Tranform: Chuyển kiểu dữ liệu
  2. Validate: Kiểu tra dữ liệu

- Gồm 3 cấp:

  1. Param: Tác động đến một param

  ```TS
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): number {
        return id
    }
  ```

  2. Controller: Sẽ tự động tranfrom và validate trên một route

  ```TS
    <!-- user.dto.ts -->
    export class UserDto {
      @IsNotEmpty()
      @IsString()
      @Expose() //exclude field
      username: string

      @IsNotEmpty()
      @IsString()
      firstName: string

      @IsNotEmpty()
      @IsString()
      lastName: string

      @Transform({obj} => obj.firstName + obj.lastName)
      fullName

      @IsNotEmpty()
      @IsString()
      @Expose()
      password: string
    }
  ```

  ```TS
   @UsePipes(new ValidationPipe())
   @Post()
   getUserById(@Body() user: UserDto): UserDto {
      // remove not-use field when Fe sending request
      const userReal = plainTOClass(UserDto, user, {excludeExtraneousValues: true})
      return UserDto
   }
  ```

  3. Global: Sẽ tự động tranfrom và validate trên toàn bộ hệ thống

  ```TS
    <!-- main.ts -->
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    import { ValidationPipe } from '@nestjs/common';

    async function bootstrap(): Promise<void> {
      const app = await NestFactory.create(AppModule);

      app.useGlobalPipes(new ValidationPipe());

      await app.listen(3000);
    }
    bootstrap();

  ```

  ```TS
    <!-- user.controller.ts -->
    @Post()
    getUserById(@Body() user: UserDto): UserDto {
      // remove not-use field when Fe sending request
      const userReal = plainTOClass(UserDto, user, {excludeExtraneousValues: true})
      return UserDto
    }
  ```

- **Lưu ý**: ở cấp controller và global thì pipe sẽ phục thuộc vào 2 package là class-validator và class-transformation

## Dependency Injection:

- Để sự phụ thuộc lẫn nhau, nestJS sử dụng denpendency injection để tránh các instance phụ thuộc lẫn nhau VD: A => B => C
- Bằng cách sẽ tạo một container (Inject) để khởi tạo và quản lý các instance khi cần dùng chỉ cần lấy ra trong container và không cần khởi tạo lại
- Trong nestJS một module sẽ có một file module để ta khai báo các provider sử dụng trong module đó. Từ đó khi sử dụng ta chỉ cần lấy ra sử dụng không cần khởi tạo

## Custom Provider

- Có 4 loại:

  1. use class
  2. use Value: Provider một giá trị cụ thể

  ```TS
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';

  const ConfigFacebook = {
    appId: "123",
    appSecret: "dsds"
  }

  @Module({
    imports: [],
    controllers: [AppController],
    providers: [{
      provide: "APP_FACEBOOK",
      useValue: ConfigFacebook,
    }],
    exports: [],
  })
  export class AppModule {}

  ```

  ```TS
  import { Controller, Get } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {
    constructor(
      @Inject("APP_FACEBOOK") appFacebook: any,
      private readonly appService: AppService
    ) {}

    @Get()
    getHello(): string {
      console.log(this.appFacebook)
      return this.appService.getHello();
    }
  }

  ```

  3. factory
  4. use Exiting

---

## Go Home [click here](../README.md)
