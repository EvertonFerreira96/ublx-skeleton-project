
import { INatureEntityModel } from "@/data/entities";
import { ICreateNatureEntityDTO } from "@/domain/dto";
import { HttpClient, HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError, EmailInUseError } from "@/domain/errors/";
import { ISignUpNatureEntity } from "@/domain/services/-authentications/sign-up/nature-entity";
import { IAuthSingleSignOnByPhoneDTO } from "@/domain/dto/-authentications/single-sign-on";
import { ISendOneTimePasswordByPhoneNumber } from "@/domain/services/-authentications";
import { IOneTimePasswordModel } from "@/data/entities/-one-time-password";


export class RemoteSendOneTimePasswordMessageByPhoneNumber implements ISendOneTimePasswordByPhoneNumber {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<IOneTimePasswordModel>
  ){}
  async send ( params : IAuthSingleSignOnByPhoneDTO): Promise<IOneTimePasswordModel> {
     const httpResponse = await this.httpClient.request({
       
      url: this.url,
      headers:{
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(params)
        
    });
    switch(httpResponse.statusCode){
      case HttpStatusCode.success: return httpResponse.body as IOneTimePasswordModel; 
      case HttpStatusCode.forbidden: throw new EmailInUseError(); 
      default: throw new UnexpectedError()

    }
  }
}