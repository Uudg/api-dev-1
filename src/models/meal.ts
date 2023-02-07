export default class Meal {
    constructor(
        public name: string,
        public category_id: string,
        public price: number,
        public slug: string,
        public description: string,
        public time: number,
        public restaurant_id: string,
        public calorie: number,
        public deleted_at: Date
    ){}
}