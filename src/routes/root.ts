import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
//   fastify.post<{Body: any}>('/', async function (request) {
    fastify.get('/', async function (request) {
    fastify.log.info(request.body);

    return { root: true }
  })
}

export default root;
