import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys.repository'
import { SurveyModel } from '@/domain/models/survey'

export class DbLoadSurveys implements LoadSurveysRepository {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}
  async loadAdd (): Promise<SurveyModel[]> {
    await this.loadSurveysRepository.loadAdd()
    return []
  }
}
