import { ServerError, UnautorizedError } from '../../errors'
import { HttpResponse } from '../../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  body: error, statusCode: 400
})

export const unauthorized = (): HttpResponse => ({
  body: new UnautorizedError(), statusCode: 401
})

export const serverError = (error: Error): HttpResponse => ({
  body: new ServerError(error.stack), statusCode: 500
})

export const ok = (data: any): HttpResponse => ({
  body: data, statusCode: 200
})

export const forbidden = (error: Error): HttpResponse => ({
  body: error, statusCode: 403
})
