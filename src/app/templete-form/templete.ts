export class eventData {
    fullName: string
    email: string
    chooseEvent: string
    date: string
    constructor(fullName: string = '', email: string = '', chooseEvent: string = '', date: string = '') {
        this.fullName = fullName
        this.email = email
        this.chooseEvent = chooseEvent
        this.date = date
    }
}