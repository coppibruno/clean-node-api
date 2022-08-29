import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController { 
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFieds = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFieds) {
      if (!httpRequest.body[field]){
        return badRequest(new MissingParamError(field))
      }
    }
  }
}