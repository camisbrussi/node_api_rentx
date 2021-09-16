import { Category } from '@modules/cars/infra/typeorm/entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>
  create({ name, description }: ICategoriesRepositoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
