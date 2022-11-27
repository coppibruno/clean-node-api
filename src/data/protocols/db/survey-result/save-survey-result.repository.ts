import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultModelParams } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModelParams) => Promise<SurveyResultModel>
}
