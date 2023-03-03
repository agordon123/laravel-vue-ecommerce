export class User {
    constructor({ id, name, email }) {
        this.id = id
        this.name = name
        this.email = email
    }

    get displayName() {
        return `${this.name} (${this.email})`
    }
}
