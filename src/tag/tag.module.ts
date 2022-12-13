import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';
// module will 3 main content:
//- prividers (service of controller) -> logic query database (methods findAll, ...)
//- controllers : init methods (get,post,put,detele) and get response to service
//- imports : imports module and use logic from outside
@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
