
import { Controller, Get, Post, Query, Param, Body, Req, Put, Delete } from '@nestjs/common';
import { LiensService } from './liens.service';
import { Lien } from './interface/lien.interface';
import { CreateAndUpdateLienDto } from './dto/createAndUpdate.lien.dto';

@Controller('liens')
export class LiensController {
  constructor(private liensService: LiensService) {}

  @Post()
  // create(@Body() nouveauLien: Lien): string {
  create(@Body() createLienDto: CreateAndUpdateLienDto) {
    this.liensService.create(createLienDto);
  }

  @Get()
  async findAll(): Promise<[Lien]> {
    return this.liensService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.liensService.remove(id);
  }

  @Put()
  update(@Body() updateLienDto: CreateAndUpdateLienDto) {
    this.liensService.update(updateLienDto);
  }

}
