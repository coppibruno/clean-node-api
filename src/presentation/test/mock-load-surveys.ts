import { mockFakeSurveys, mockSurveyModel } from '@/domain/test'
import { LoadSurveyById } from '../controllers/survey-result/save-survey-result/save-survey-result.controller-protocols'
import { LoadSurveys, SurveyModel } from '../controllers/survey/load-surveys/load-surveys-controller-protocols'

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return Promise.resolve(mockFakeSurveys())
    }
  }
  return new LoadSurveysStub()
}
export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdStub()
}
