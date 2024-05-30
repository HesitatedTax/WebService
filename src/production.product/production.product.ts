import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductionProductDto } from './dto/create-production.product.dto';
import { UpdateProductionProductDto } from './dto/update-production.product.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { promises } from 'dns';
import { ProductionProduct } from './entities/production.product.entity';

@Injectable()
export class ProductionProductService {

    constructor(
      @InjectEntityManager()
      private readonly entityManager: EntityManager
    ){}

    async create(createProductionProductDto: CreateProductionProductDto): Promise<ProductionProduct> {
      const newProducto = new ProductionProduct();
      
      newProducto.Name = createProductionProductDto.Name;
      newProducto.ProductNumber= createProductionProductDto.ProductNumber;
      newProducto.MakeFlag=createProductionProductDto.MakeFlag;
      newProducto.FinishedGoodsFlag=createProductionProductDto.FinishedGoodsFlag;
      newProducto.Color=createProductionProductDto.Color;
      newProducto.SafetyStockLevel=createProductionProductDto.SafetyStockLevel;
      newProducto.ReorderPoint=createProductionProductDto.ReorderPoint;
      newProducto.StandardCost=createProductionProductDto.StandardCost;
      newProducto.ListPrice=createProductionProductDto.ListPrice;
      newProducto.Size=createProductionProductDto.Size;
      newProducto.SizeUnitMeasureCode=createProductionProductDto.SizeUnitMeasureCode;
      newProducto.WeightUnitMeasureCode=createProductionProductDto.WeightUnitMeasureCode;
      newProducto.Weight=createProductionProductDto.Weight
      newProducto.DaysToManufacture=createProductionProductDto.DaysToManufacture;
      newProducto.ProductLine=createProductionProductDto.ProductLine;
      newProducto.Class=createProductionProductDto.Class;
      newProducto.Style=createProductionProductDto.Style;
      newProducto.ProductSubcategoryID=createProductionProductDto.ProductSubcategoryID;
      newProducto.ProductModelID=createProductionProductDto.ProductModelID
      newProducto.SellStartDate=createProductionProductDto.SellStartDate;
      newProducto.SellEndDate=createProductionProductDto.SellEndDate;
      newProducto.DiscontinuedDate=createProductionProductDto.DiscontinuedDate
      newProducto.rowguid=createProductionProductDto.rowguid;
      newProducto.ModifiedDate=createProductionProductDto.ModifiedDate;

     const productionRepository = this.entityManager.getRepository(ProductionProduct);
    return await productionRepository.save(newProducto);
  }
  async findAll(): Promise<ProductionProduct[]> {
    const productionRepository=this.entityManager.getRepository(ProductionProduct)
    return await productionRepository.find();
  }

  async findOneProduct(id: number): Promise<ProductionProduct> {
    const productionRepository=this.entityManager.getRepository(ProductionProduct)
    return await productionRepository.findOne({where:{ProductID: id}}) 
  }

  async update(id: number, updateProductionProductDto: UpdateProductionProductDto): Promise<ProductionProduct> {
    const productionRepository = this.entityManager.getRepository(ProductionProduct);
    const existingProduct = await productionRepository.findOne({where: {ProductID:id}});
    if (!existingProduct) {
      throw new BadRequestException('Product with ID ${id} not found');
    }
    existingProduct.Name = updateProductionProductDto.Name;
    existingProduct.ProductNumber= updateProductionProductDto.ProductNumber;
    existingProduct.MakeFlag=updateProductionProductDto.MakeFlag;
    existingProduct.FinishedGoodsFlag=updateProductionProductDto.FinishedGoodsFlag;
    existingProduct.Color=updateProductionProductDto.Color;
    existingProduct.SafetyStockLevel=updateProductionProductDto.SafetyStockLevel;
    existingProduct.ReorderPoint=updateProductionProductDto.ReorderPoint;
    existingProduct.StandardCost=updateProductionProductDto.StandardCost;
    existingProduct.ListPrice=updateProductionProductDto.ListPrice;
    existingProduct.Size=updateProductionProductDto.Size;
    existingProduct.SizeUnitMeasureCode=updateProductionProductDto.SizeUnitMeasureCode;
    existingProduct.WeightUnitMeasureCode=updateProductionProductDto.WeightUnitMeasureCode;
    existingProduct.Weight=updateProductionProductDto.Weight;
    existingProduct.DaysToManufacture=updateProductionProductDto.DaysToManufacture;
    existingProduct.ProductLine=updateProductionProductDto.ProductLine;
    existingProduct.Class=updateProductionProductDto.Class;
    existingProduct.Style=updateProductionProductDto.Style;
    existingProduct.ProductSubcategoryID=updateProductionProductDto.ProductSubcategoryID;
    existingProduct.ProductModelID=updateProductionProductDto.ProductModelID;
    existingProduct.SellStartDate=updateProductionProductDto.SellStartDate;
    existingProduct.SellEndDate=updateProductionProductDto.SellEndDate;
    existingProduct.DiscontinuedDate=updateProductionProductDto.DiscontinuedDate;
    existingProduct.rowguid=updateProductionProductDto.rowguid;
    existingProduct.ModifiedDate=updateProductionProductDto.ModifiedDate;
    return await productionRepository.save(existingProduct);
   
  }

  async remove(id: number): Promise<void>{
    const productionRepository = this.entityManager.getRepository(ProductionProduct);
    const existingProduct = await  productionRepository.findOne({ where: {ProductID:id} });
    if (!existingProduct) {
      throw new BadRequestException('Product with ID ${id} not found');
    }
    await productionRepository.remove(existingProduct);
    
  }
  }
