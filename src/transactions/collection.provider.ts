import { Collection } from 'src/entities/collection.entity';


export const collectionsProviders = [
  {
    provide: 'COLLECTION_REPOSITORY',
    useValue: Collection,
  },
];