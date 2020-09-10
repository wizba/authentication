import { JurneyModule } from './jurney/Category.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/course.module';

@Module({
  imports: [
        JurneyModule, 
    AuthModule,
    // MongooseModule.forRoot('mongodb://mongo/authentication'),
    MongooseModule.forRoot('mongodb://localhost/authentication'),
    CoursesModule
  ],
  controllers: [
         AppController],
  providers: [
        AppService],
})
export class AppModule {}
