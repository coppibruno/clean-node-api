import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResult, SaveSurveyResultModelParams } from '../controllers/survey-result/save-survey-result/save-survey-result.controller-protocols'

export const mockSaveSurveyResult = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  question: 'any_question',
  answers: [
    { answer: 'any_answer', count: 1, percent: 50 },
    { answer: 'other_answer', image: 'any_image', count: 10, percent: 80 }
  ],
  date: new Date()
})

export const mockSaveSurveyResultRepository = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultModelParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSaveSurveyResult())
    }
  }
  return new SaveSurveyResultStub()
}
