import { Authentication, AuthenticationModelParams } from '../controllers/login/login/login-controller-protocols'

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authenticationModel: AuthenticationModelParams): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new AuthenticationStub()
}
