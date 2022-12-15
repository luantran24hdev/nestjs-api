import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller()
//unit router api nest
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get('tags')
  //methods
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    console.log('tags', tags);
    // => response await of tags
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
