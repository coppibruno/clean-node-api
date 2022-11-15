import { InvalidParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols'

export class CompareFieldsValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly fieldNameToCompareName: string) {
    this.fieldName = fieldName
    this.fieldNameToCompareName = fieldNameToCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldNameToCompareName]) {
      return new InvalidParamError(this.fieldNameToCompareName)
    }
  }
}
