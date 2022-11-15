import { HttpRequest, Validation } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [
      { image: 'any_image', answer: 'any_answer' }
    ]
  }
})

interface SutTypes {
  validationStub: Validation
  sut: AddSurveyController
}

const makeSut = (): SutTypes => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  const validationStub = new ValidationStub()
  const sut = new AddSurveyController(validationStub)
  return { validationStub, sut }
}

describe('Add Survey Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { validationStub, sut } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
})
