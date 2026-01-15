import { Sequelize } from 'sequelize-typescript';
import { Collection } from 'src/entities/collection.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nest',
      });
      sequelize.addModels([Collection]);
      await sequelize.sync();
      return sequelize;
    },
  },
];