import { ObjectId } from "mongodb";

export default class File {
    constructor(
        public object: string,
        public object_id: string,
        public item: string,
        public slug: string,
        public updated_by: ObjectId,
        public updated_at: Date,
        public deleted_by: ObjectId,
        public deleted_at: Date
    ) {}
}