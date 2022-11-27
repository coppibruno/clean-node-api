import { SaveSurveyResultModelParams, SaveSurveyResultRepository, SurveyResultModel } from '../usecases/save-survey-result/db-save-survey-result-protocols'

export const mockFakeSurveyResultData = (): SaveSurveyResultModelParams => ({
  accountId: 'any_account_id',
  surveyId: 'any_suvery_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockFakeSurveyResult = (): SurveyResultModel => Object.assign({}, mockFakeSurveyResultData(), { id: 'any_id' })

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockFakeSurveyResult())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
