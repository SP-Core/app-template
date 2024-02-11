// @ts-nocheck

class HttpHelper{
    static CreateGetCall(url: string): Call;
    static CreatePostCall(url: string, body: RequestBody): Call;
    static CreatePutCall(url: string, body: RequestBody): Call;
    static Send(call: Call, responseDelegate: ResponseDelegate)
    static NoneBody: RequestBody;
}

interface Call{

}

interface ResponseDelegate{
    (call: Call, response: Response): void;
}
