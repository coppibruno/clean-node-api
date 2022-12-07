import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result.repository'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { SurveyResultModel } from './db-load-survey-result-protocols'

export class DbLoadSurveResult implements LoadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: LoadSurveyResultRepository) {}
  async load (surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return Promise.resolve(null)
  }
}