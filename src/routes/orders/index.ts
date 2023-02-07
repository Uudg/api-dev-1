import { FastifyPluginAsync } from "fastify";

const orders: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/', async function (req, res) {
        return 'this is orders'
    })
}

export default orders;