export type AuthenticationModelParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authentication: AuthenticationModelParams) => Promise<string>
}
