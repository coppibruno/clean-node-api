import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveysRepository {
  loadAdd: () => Promise<SurveyModel[]>
}
