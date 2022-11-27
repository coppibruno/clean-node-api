import { SurveyModel } from '../../models/survey'

export type AddSurveyModelParams = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyModelParams) => Promise<void>
}
