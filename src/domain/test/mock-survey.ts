import { SurveyModel } from '../models/survey'

export const mockSurveyModel = (): SurveyModel => ({
  id: 'any_id',
  question: 'any_question',
  answers: [
    { image: 'any_image', answer: 'any_answer' }
  ],
  date: new Date()
})

export const mockFakeSurveys = (): SurveyModel[] => {
  return [
    {
      id: 'any_id',
      question: 'any_question',
      answers: [
        { image: 'any_image', answer: 'any_answer' }
      ],
      date: new Date()
    },
    {
      id: 'other_id',
      question: 'other_question',
      answers: [
        { image: 'other_image', answer: 'other_answer' }
      ],
      date: new Date()
    }
  ]
}
