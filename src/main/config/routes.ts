import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  const dir = path.join(__dirname, '..', 'routes')

  readdirSync(dir).map(async file => {
    const dirFile = path.join(__dirname, '..', 'routes', file)
    if (!file.includes('.test.')) {
      (await import(dirFile)).default(router)
    }
  })
}
