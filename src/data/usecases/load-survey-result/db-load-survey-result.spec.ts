import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result.repository'
import { mockFakeSurveyResult } from '@/data/test'
import { DbLoadSurveResult } from './db-load-survey-result'
import { SurveyResultModel } from './db-load-survey-result-protocols'

describe('DbLoadSurveyResult Usecase', () => {
  test('Should call LoadSurveResultRepository with correct value', async () => {
    class LoadSurveResultRepositoryStub implements LoadSurveyResultRepository {
      async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
        return Promise.resolve(mockFakeSurveyResult())
      }
    }
    const loadSurveResultRepositoryStub = new LoadSurveResultRepositoryStub()
    const sut = new DbLoadSurveResult(loadSurveResultRepositoryStub)
    const loadBySurveyIdSpy = jest.spyOn(loadSurveResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
