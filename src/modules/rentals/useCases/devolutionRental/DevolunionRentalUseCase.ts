import { inject } from 'tsyringe';

import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';

interface IRequest {
  id: string;
  user_id: string;
}

class DevolutionRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async execute({ id, user_id }) {

  }
}

export { DevolutionRentalUseCase };
