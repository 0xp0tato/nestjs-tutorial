import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup(): string {
    return 'signup';
  }

  signin(): string {
    return 'signin';
  }
}
