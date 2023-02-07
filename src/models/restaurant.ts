// External dependencies

// import { ObjectID } from "mongodb";

// Class implementation

export default class Restaurant {
    constructor(
        public name: string,
        public location: string,
        public slug: string,
        public fees: number,
        public deleted_at: Date
        ) {}
}