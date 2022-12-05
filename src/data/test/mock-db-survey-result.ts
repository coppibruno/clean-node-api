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
    { answer: 'any_answer', count: 1, percent: 50 },
    { answer: 'other_answer', image: 'any_image', count: 10, percent: 80 }
  ],
  date: new Date()
})

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockFakeSurveyResult())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
