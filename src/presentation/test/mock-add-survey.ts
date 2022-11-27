import { AddSurvey, AddSurveyModelParams } from '../controllers/survey/add-survey/add-survey-controller-protocols'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyModelParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new AddSurveyStub()
}
