import { SurveyResultModel } from '../../models/survey-result'

export type SaveSurveyResultModelParams = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultModelParams) => Promise<SurveyResultModel>
}
