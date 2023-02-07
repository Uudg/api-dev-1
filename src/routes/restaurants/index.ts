import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { collections } from "../../services/database.service";
import { connectToDatabase } from "../../services/database.service";
// import {ObjectId} from "mongodb";
import Restaurant from "../../models/restaurant";
import { ObjectId } from "mongodb";

const autoload = async () => connectToDatabase()
autoload();

 const restaurants: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
     fastify.get('/', async (req, res) => {

        try {
            const restaurants = await collections.restaurants?.find({}).toArray() as unknown as Array<Restaurant>

            await res.status(200).send(restaurants);
        }
        catch (err) {
            // console.log(err.message);
            res.status(500).send({msg: 'error'});
        }
    })

    // interface IQuerystring {
    //     id: string;
    // }

    // fastify.get<{Querystring: IQuerystring}>('/:id', async (req, res) => {
    fastify.get('/:id', async (req: FastifyRequest<{
        Params: {
            id: string
        }
    }>, res) => {

        const id = req?.params?.id;

        try {
            const query = { _id: new ObjectId(id) };
            const restaurant = await collections.restaurants?.findOne(query) as unknown as Restaurant;

            if (restaurant) res.status(200).send(restaurant);
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`)
        }
    })
 }

 export default restaurants;    