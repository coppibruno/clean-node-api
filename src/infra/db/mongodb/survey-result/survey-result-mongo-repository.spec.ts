import { AccountModel } from '@/domain/models/account'
import { SurveyModel } from '@/domain/models/survey'
import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

const makeSurvey = async (): Promise<SurveyModel> => {
  await surveyCollection.insertOne({
    question: 'any_question',
    answers: [
      { image: 'any_image', answer: 'any_answer' },
      { image: 'other_image', answer: 'other_answer' }
    ],
    date: new Date()
  })
  const result = await surveyCollection.findOne({ question: 'any_question' })
  return MongoHelper.map(result)
}

const makeAccount = async (): Promise<AccountModel> => {
  await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password'
  })
  const result = await accountCollection.findOne({ name: 'any_name' })
  return MongoHelper.map(result)
}

let surveyResultCollection: Collection
let surveyCollection: Collection
let accountCollection: Collection

describe('Survey Result Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})

    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})

    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const sut = makeSut()
      const survey = await makeSurvey()
      const account = await makeAccount()

      const surveyResult = await sut.save({
        surveyId: survey.id,
        accountId: account.id,
        answer: survey.answers[0].answer,
        date: new Date()
      })

      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toBeTruthy()
      expect(surveyResult.answer).toBe(survey.answers[0].answer)
    })
    test('Should update survey result if its not new', async () => {
      const sut = makeSut()
      const survey = await makeSurvey()
      const account = await makeAccount()
      await surveyResultCollection.insertOne({
        surveyId: survey.id,
        accountId: account.id,
        answer: survey.answers[0].answer,
        date: new Date()
      })
      const old = await surveyResultCollection.findOne({ surveyId: survey.id })

      const surveyResult = await sut.save({
        surveyId: survey.id,
        accountId: account.id,
        answer: survey.answers[1].answer,
        date: new Date()
      })

      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toEqual(old._id.toString())
      expect(surveyResult.answer).toBe(survey.answers[1].answer)
    })
  })
})
