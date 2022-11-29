export const surveyPath = {
  get: {
    security: [
      { apiKeyAuth: [] }
    ],
    tags: ['Enquete'],
    summary: 'API para listar todas as enquetes',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveys'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  post: {
    security: [
      { apiKeyAuth: [] }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSurveyParams'
          }
        }
      }
    },
    tags: ['Enquete'],
    summary: 'API para criar uma enquete',
    responses: {
      204: {
        description: 'Sucesso'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
