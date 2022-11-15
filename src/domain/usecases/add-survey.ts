export interface SurveyAnswer {
  image: string
  asnwer: string
}

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
