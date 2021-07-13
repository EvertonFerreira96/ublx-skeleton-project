import { ILegalEntityModel } from "@/data/entities/";
import { ICreateLegalEntityDTO } from "@/domain/dto";
import { HttpClient, HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError, EmailInUseError } from "@/domain/errors/";
import { ISignUpLegalEntity } from "@/domain/services/-authentications";


export class RemoteSignUpLegalEntity implements ISignUpLegalEntity {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ILegalEntityModel>
  ){}
  async registry (params : ICreateLegalEntityDTO): Promise<ILegalEntityModel> {

     const httpResponse = await this.httpClient.request({
      url: this.url,
      headers:{
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(params)
        
    });

    switch(httpResponse.statusCode){
      case HttpStatusCode.success: return httpResponse.body as ILegalEntityModel; 
      case HttpStatusCode.forbidden: throw new EmailInUseError(); 
      default: throw new UnexpectedError()

    }
  }
}