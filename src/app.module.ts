import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './courses/course.controller';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/Fatso'),
    CourseModule
  ],
  controllers: [AppController,CourseController],
  providers: [AppService],
})
export class AppModule {}
