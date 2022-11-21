import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys.repository'
import { SurveyModel } from '@/domain/models/survey'
import { DbLoadSurveys } from './db-load-surveys'

const makeFakeSurveys = (): SurveyModel[] => {
  return [
    {
      id: 'any_id',
      question: 'any_question',
      answers: [
        { image: 'any_image', answer: 'any_answer' }
      ],
      date: new Date()
    },
    {
      id: 'other_id',
      question: 'other_question',
      answers: [
        { image: 'other_image', answer: 'other_answer' }
      ],
      date: new Date()
    }
  ]
}

interface SutTypes {
  sut: DbLoadSurveys
  loadSurveysRepositoryStub: LoadSurveysRepository
}

const makeSut = (): SutTypes => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAdd (): Promise<SurveyModel[]> {
      return new Promise(resolve => resolve(makeFakeSurveys()))
    }
  }
  const loadSurveysRepositoryStub = new LoadSurveysRepositoryStub()

  const sut = new DbLoadSurveys(loadSurveysRepositoryStub)
  return { sut, loadSurveysRepositoryStub }
}

describe('DbLoadSurveys Usecase', () => {
  test('Should call LoadSurveysRepository', async () => {
    const { sut, loadSurveysRepositoryStub } = makeSut()

    const loadAllSpy = jest.spyOn(loadSurveysRepositoryStub, 'loadAdd')

    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })
  test('Should return a list of Surveys on success', async () => {
    const { sut } = makeSut()

    const surveys = await sut.load()
    expect(surveys).toEqual(makeFakeSurveys())
  })
})
