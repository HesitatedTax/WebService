import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Production.Product')
export class ProductionProduct {

    @PrimaryGeneratedColumn()
    ProductID: number;
    @Column()
    Name: String;
    @Column()
    ProductNumber: String;
    @Column()
    MakeFlag:boolean;
    @Column()
    FinishedGoodsFlag:boolean;
    @Column()
    Color: String;
    @Column()
    SafetyStockLevel: number; 
    @Column()
    ReorderPoint: number;
    @Column()
    StandardCost: number;
    @Column()
    ListPrice: number;
    @Column()
    Size: String;
    @Column()
    SizeUnitMeasureCode: String;
    @Column()
    WeightUnitMeasureCode: String;
    @Column()
    Weight: String;
    @Column()
    DaysToManufacture: number;
    @Column()
    ProductLine: String;
    @Column()
    Class: String;
    @Column()
    Style: String;
    @Column()
    ProductSubcategoryID: String;
    @Column()
    ProductModelID: String;
    @Column()
    SellStartDate:Date;
    @Column()
    SellEndDate: Date; 
    @Column()
    DiscontinuedDate: Date; 
    @Column()
	rowguid: String;
    @Column()
    ModifiedDate: Date; 
}
//int, double  = number
