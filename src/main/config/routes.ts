import { readdirSync } from 'fs'
import { Express, Router } from 'express'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${String(__dirname)}/../routes`).map(async (file) => {
    if (!file.endsWith('.map') && !file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
