export class User {
    id: number;
    name: string;
    lastname: string;
    fiscalcode: string;
    email: string;
    password: string;
    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname = '';
        this.fiscalcode = '';
        this.email = '';
        this.password = '';
    }
}
