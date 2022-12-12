import { LoadSurveyResultRepository } from '../protocols/db/survey-result/load-survey-result.repository'
import { SaveSurveyResultModelParams, SaveSurveyResultRepository, SurveyResultModel } from '../usecases/save-survey-result/db-save-survey-result-protocols'

export const mockFakeSurveyResultData = (): SaveSurveyResultModelParams => ({
  accountId: 'any_account_id',
  surveyId: 'any_suvery_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockFakeSurveyResult = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  question: 'any_question',
  answers: [
    { answer: 'any_answer', image: 'any_image', count: 0, percent: 0 },
    { answer: 'other_answer', image: 'any_image', count: 0, percent: 0 }
  ],
  date: new Date()
})

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultModelParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return Promise.resolve(mockFakeSurveyResult())
    }
  }
  return new LoadSurveResultRepositoryStub()
}
