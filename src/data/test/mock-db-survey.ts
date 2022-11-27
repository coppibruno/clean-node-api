import { mockFakeSurveys, mockSurveyModel } from '@/domain/test'
import { AddSurveyRepository } from '../protocols/db/survey/add-survey.repository'
import { LoadSurveyByIdRepository } from '../protocols/db/survey/load-survey-by-id.repository'
import { LoadSurveysRepository } from '../protocols/db/survey/load-surveys.repository'
import { AddSurveyModelParams } from '../usecases/survey/add-survey/db-add-survey-protocols'
import { SurveyModel } from '../usecases/survey/load-survey-by-id/db-load-survey-by-id-protocols'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyModelParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepositoryStub implements LoadSurveyByIdRepository {
    async loadById (id: string): Promise<SurveyModel> {
      return Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdRepositoryStub()
}

export const mockLoadSurveysRepository = (): LoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return Promise.resolve(mockFakeSurveys())
    }
  }
  return new LoadSurveysRepositoryStub()
}
