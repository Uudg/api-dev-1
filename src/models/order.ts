export default class Order {
    constructor(
        public subtotal: number,
        public fees: number,
        public total: number,
        public payment_method: boolean,
        public table_id: number,
        public user_id: string,
        public order_type_id: string,
        public restaurant_id: string,
        public preparation_time: string,
        public merchant_order_time: string,
        public ready_time: Date,
        public current_status_id: number,
        public canceled_at: Date
        ) {}
}