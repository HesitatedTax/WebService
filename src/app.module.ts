import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionProductModule } from './production.product/production.product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433, // Puerto por defecto de SQL Server
      username: 'sa',
      password: '1234',
      database: 'AdventureWorks2022',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Útil para desarrollo, no recomendable para producción
      options: {
        encrypt: true, // Si es necesario, dependiendo de tu configuración de servidor
        trustServerCertificate: true // Necesario si estás en desarrollo y usas certificados autofirmados
      }
    }),
    ProductionProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
