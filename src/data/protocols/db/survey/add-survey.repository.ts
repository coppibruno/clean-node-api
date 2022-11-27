import { AddSurveyModelParams } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add: (surveyData: AddSurveyModelParams) => Promise<void>
}
