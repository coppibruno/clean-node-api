import { AccountModel } from '../models/account'
import { AddAccountModelParams } from '../usecases/account/add-account'

export const mockAccountModel = (): AccountModel => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email',
  password: 'any_password'
})

export const mockAccountParams = (): AddAccountModelParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})
