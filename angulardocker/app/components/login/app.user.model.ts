export class User {
    constructor(
        public UserName: string,
        public password: string
    ) {

    }
}

export const Users: Array<User> = new Array<User>();
Users.push(new User("", ""));