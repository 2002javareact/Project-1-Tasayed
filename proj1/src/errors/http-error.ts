export class HttpError extends Error{
    status:any = 0;
    constructor(message?:string, status?:Number){
        super(message)
        this.status = status
    }
}