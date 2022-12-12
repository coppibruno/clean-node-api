import { LoadSurveyResultRepository } from './db-load-survey-result-protocols'
import { mockFakeSurveyResult, mockLoadSurveyByIdRepository, mockLoadSurveyResultRepository } from '@/data/test'
import { DbLoadSurveResult } from './db-load-survey-result'
import { throwError } from '@/domain/test'
import { LoadSurveyByIdRepository } from '../survey/load-survey-by-id/db-load-survey-by-id-protocols'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbLoadSurveResult
  loadSurveResultRepositoryStub: LoadSurveyResultRepository
  loadSurveyByIdRepositoryStub: LoadSurveyByIdRepository
}

const makeSut = (): SutTypes => {
  const loadSurveResultRepositoryStub = mockLoadSurveyResultRepository()
  const loadSurveyByIdRepositoryStub = mockLoadSurveyByIdRepository()
  const sut = new DbLoadSurveResult(loadSurveResultRepositoryStub, loadSurveyByIdRepositoryStub)
  return { sut, loadSurveResultRepositoryStub, loadSurveyByIdRepositoryStub }
}

describe('DbLoadSurveyResult Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })
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
  test('Should call LoadSurveyById if LoadSurveResultRepository returns null', async () => {
    const { sut, loadSurveResultRepositoryStub, loadSurveyByIdRepositoryStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdRepositoryStub, 'loadById')
    jest.spyOn(loadSurveResultRepositoryStub, 'loadBySurveyId').mockReturnValueOnce(Promise.resolve(null))

    await sut.load('any_survey_id')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
  test('Should return surveyResultModel with all answers with count 0 if LoadSurveResultRepository returns null', async () => {
    const { sut, loadSurveResultRepositoryStub } = makeSut()
    jest.spyOn(loadSurveResultRepositoryStub, 'loadBySurveyId').mockReturnValueOnce(Promise.resolve(null))

    const surveyResult = await sut.load('any_survey_id')
    expect(surveyResult).toEqual(mockFakeSurveyResult())
  })
  test('Should return surveyResultModel on success', async () => {
    const { sut } = makeSut()
    const surveyResult = await sut.load('any_survey_id')
    expect(surveyResult).toEqual(mockFakeSurveyResult())
  })
})
