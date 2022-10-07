import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    let test = {test: 'save'};
    return test;
  }

  findAll() {
    let test = {test: 'getAll'};
    return test;
  }
}
