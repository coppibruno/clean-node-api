import { LoadSurveyResultRepository } from './db-load-survey-result-protocols'
import { mockLoadSurveyResultRepository } from '@/data/test'
import { DbLoadSurveResult } from './db-load-survey-result'
import { throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLoadSurveResult
  loadSurveResultRepositoryStub: LoadSurveyResultRepository
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
  test('Should throw if LoadSurveResultRepository throws', async () => {
    const { sut, loadSurveResultRepositoryStub } = makeSut()
    jest.spyOn(loadSurveResultRepositoryStub, 'loadBySurveyId').mockImplementationOnce(throwError)

    const promise = sut.load('any_survey_id')
    await expect(promise).rejects.toThrow()
  })
})
