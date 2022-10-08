import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { InsertAllProductDto } from './dto/insert-all-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.productsService.create(createOrderDto);
  }

  @Post('insert-all')
  insertAll() {
    return this.productsService.insertAll();
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
