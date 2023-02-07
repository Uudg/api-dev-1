// Class implementaion
export default class User {
    constructor(
        public username: string,
        public name: string,
        public surname: string,
        public date_of_birth: Date,
        public email: string,
        public password: string,
        public mobile_number: string,
        public profile_photo: string,
        public background_photo: string,
        public sms: string,
        public confirmed: boolean,
        public deleted_at: Date,
        public createt_at: Date,
        public auth_token: string,
        public login_time: Date,
        public logout_time: Date,
    ) {}
}