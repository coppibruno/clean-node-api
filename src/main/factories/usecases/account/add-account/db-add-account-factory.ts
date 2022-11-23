
import { BcryptAdapter } from '@/infra/bcrypter-adapter/bcrypt-adapter'
import { AddAccount } from '@/domain/usecases/account/add-account'
import { DbAddAccount } from '@/data/usecases/account/add-account/db-add-account'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12

  const bcryptAdapter = new BcryptAdapter(salt)

  const accountMongoRepository = new AccountMongoRepository()

  return new DbAddAccount(bcryptAdapter,accountMongoRepository, accountMongoRepository)
}
