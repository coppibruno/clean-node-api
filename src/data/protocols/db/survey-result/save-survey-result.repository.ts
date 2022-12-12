import { SaveSurveyResultModelParams } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModelParams) => Promise<void>
}
