import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/achievo')],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
