import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result.repository'
import { mockFakeSurveyResult } from '@/data/test'
import { DbLoadSurveResult } from './db-load-survey-result'
import { SurveyResultModel } from './db-load-survey-result-protocols'

type SutTypes = {
  sut: DbLoadSurveResult
  loadSurveResultRepositoryStub: LoadSurveyResultRepository
}

const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return Promise.resolve(mockFakeSurveyResult())
    }
  }
  return new LoadSurveResultRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadSurveResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveResult(loadSurveResultRepositoryStub)
  return { sut, loadSurveResultRepositoryStub }
}

describe('DbLoadSurveyResult Usecase', () => {
  test('Should call LoadSurveResultRepository with correct value', async () => {
    const { sut, loadSurveResultRepositoryStub } = makeSut()
    const loadBySurveyIdSpy = jest.spyOn(loadSurveResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
