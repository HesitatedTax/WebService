import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionProductDto } from './create-production.product.dto';

export class UpdateProductionProductDto extends PartialType(CreateProductionProductDto) {

    Name?: String;
    ProductNumber?: String;
    MakeFlag?:boolean;
    FinishedGoodsFlag?:boolean;
    Color?: String;
    SafetyStockLevel?: number;  
    ReorderPoint?: number;
    StandardCost?: number;
    ListPrice?: number;
    Size?: String;
    SizeUnitMeasureCode?: String;
    WeightUnitMeasureCode?: String;
    Weight?: String;
    DaysToManufacture?: number;
    ProductLine?: String;
    Class?: String;
    Style?: string;
    ProductSubcategoryID?: String;
    ProductModelID?: String;
    SellStartDate?:Date;
    SellEndDate?: Date; 
    DiscontinuedDate?: Date; 
	rowguid?: String;
    ModifiedDate?: Date; 

}
