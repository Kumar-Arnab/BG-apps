export class PasswordModel {
    email: string;
    newPassword: string;

    constructor(email?: string, newPassword?: string) {
        this.email = email || '';
        this.newPassword = newPassword || '';
    }
}