import { AddAccountModelParams } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  add: (account: AddAccountModelParams) => Promise<AccountModel>
}
