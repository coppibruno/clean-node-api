import { mockAccountModel } from '@/domain/test'
import { AccountModel, AddAccount, AddAccountModelParams } from '../controllers/login/signup/signup-controller-protocols'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountModelParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }

  return new AddAccountStub()
}
