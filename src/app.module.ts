import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './courses/course.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/Fatso')
  ],
  controllers: [AppController,CourseController],
  providers: [AppService],
})
export class AppModule {}
