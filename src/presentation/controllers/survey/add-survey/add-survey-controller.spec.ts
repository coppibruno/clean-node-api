import { AddSurvey, AddSurveyModel, HttpRequest, Validation } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'
import { badRequest, noContent, serverError } from '../../../helpers/http/http-helper'
import MockDate from 'mockdate'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [
      { image: 'any_image', answer: 'any_answer' }
    ],
    date: new Date()
  }
})
const makeAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyModel): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddSurveyStub()
}

interface SutTypes {
  validationStub: Validation
  sut: AddSurveyController
  addSurveyStub: AddSurvey
}

const makeSut = (): SutTypes => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  const addSurveyStub = makeAddSurvey()
  const validationStub = new ValidationStub()
  const sut = new AddSurveyController(validationStub, addSurveyStub)
  return { validationStub, sut, addSurveyStub }
}

describe('Add Survey Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  beforeAll(() => {
    MockDate.reset()
  })

  test('Should call Validation with correct values', async () => {
    const { validationStub, sut } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
  test('Should return 400 if Validation fails', async () => {
    const { validationStub, sut } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })
  test('Should call AddSurvey with correct values', async () => {
    const { sut, addSurveyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })
  test('Should return 500 if AddSurvey throws', async () => {
    const { sut, addSurveyStub } = makeSut()
    jest.spyOn(addSurveyStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })
  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(noContent())
  })
})
