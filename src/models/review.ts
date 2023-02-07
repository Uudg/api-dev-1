export default class Review {
    constructor(
        public restaurant_id: string,
        public user_id: string,
        public food: number,
        public service: number,
        public price: number,
        public design: number,
        public comment: string
        ) {}
}