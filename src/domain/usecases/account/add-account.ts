import { AccountModel } from '../../models/account'

export type AddAccountModelParams = Omit<AccountModel, 'id'>
export interface AddAccount {
  add: (account: AddAccountModelParams) => Promise<AccountModel>
}
