import { SurveyResultModel } from '../../models/survey-result'

export type SaveSurveyResultModelParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultModelParams) => Promise<SurveyResultModel>
}
