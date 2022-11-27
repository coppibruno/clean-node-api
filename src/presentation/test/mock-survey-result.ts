import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResult, SaveSurveyResultModelParams } from '../controllers/survey-result/save-survey-result/save-survey-result.controller-protocols'

export const mockSaveSurveyResult = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  accountId: 'valid_account_id',
  date: new Date(),
  answer: 'valid_answer',
  id: 'valid_id'
}
)

export const mockSaveSurveyResultRepository = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSaveSurveyResult())
    }
  }
  return new SaveSurveyResultStub()
}
