import { Module } from '@nestjs/common';
import { ProductionProductService } from './production.product';
import { ProductionProductController } from './production.product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionProduct } from './entities/production.product.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([ProductionProduct])
  ],
  controllers: [ProductionProductController],
  providers: [ProductionProductService],
  exports:[ProductionProductService]
})
export class ProductionProductModule {}
