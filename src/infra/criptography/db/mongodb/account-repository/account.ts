import { AddAccountRepository } from '../../../../../data/protocols/db/add-account-repository'
import { AddAccountModel } from '../../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<any> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const { insertedId: id } = await accountCollection
      .insertOne(accountData)
    const accountById = await accountCollection
      .findOne({ _id: id })

    return MongoHelper.map(accountById)
  }
}
