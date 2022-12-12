import { mockFakeSurveyResult } from '@/data/test'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockFakeSurveys } from '@/domain/test'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { LoadSurveys, SurveyModel } from '../controllers/survey/load-surveys/load-surveys-controller-protocols'

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return Promise.resolve(mockFakeSurveys())
    }
  }
  return new LoadSurveysStub()
}
export const mockLoadSurveyResult = (): LoadSurveyResult => {
  class LoadSurveyResultStub implements LoadSurveyResult {
    async load (surveyId: string): Promise<SurveyResultModel> {
      return Promise.resolve(mockFakeSurveyResult())
    }
  }
  return new LoadSurveyResultStub()
}
