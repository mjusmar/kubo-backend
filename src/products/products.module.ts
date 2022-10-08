import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/products.entity';
import { Orders } from './entities/orders.entity';
import { Ordprod } from './entities/ordprod.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products, Orders, Ordprod])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
