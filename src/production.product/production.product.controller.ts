import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductionProductService } from './production.product';
import { CreateProductionProductDto } from './dto/create-production.product.dto';
import { UpdateProductionProductDto } from './dto/update-production.product.dto';

@Controller('production.product')
export class ProductionProductController {
  constructor(private readonly productionProductService: ProductionProductService) {}

  @Post()
  create(@Body() createProductionProductDto: CreateProductionProductDto) {
    return this.productionProductService.create(createProductionProductDto);
  }

  @Get()
  findAll() {
    return this.productionProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionProductService.findOneProduct(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductionProductDto: UpdateProductionProductDto) {
    return this.productionProductService.update(+id, updateProductionProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionProductService.remove(+id);
  }
}
