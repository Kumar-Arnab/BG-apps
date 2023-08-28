export class ResponseModel {
    success: string;
    error: string;

    constructor(success?: string, error?: string) {
        this.success = success || '';
        this.error = error || '';
    }
}