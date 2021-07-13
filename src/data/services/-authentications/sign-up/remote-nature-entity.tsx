import { INatureEntityModel } from "@/data/entities";
import { ICreateNatureEntityDTO } from "@/domain/dto";
import { HttpClient, HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError, EmailInUseError } from "@/domain/errors/";
import { ISignUpNatureEntity } from "@/domain/services/-authentications/sign-up/nature-entity";


export class RemoteSignUpNatureEntity implements ISignUpNatureEntity {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<INatureEntityModel>
  ){}
  async registry ( { person, entity } : ICreateNatureEntityDTO): Promise<INatureEntityModel> {
    const params = Object.assign(person, entity);
     const httpResponse = await this.httpClient.request({
       
      url: this.url,
      headers:{
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(params)
        
    });
    switch(httpResponse.statusCode){
      case HttpStatusCode.success: return httpResponse.body as INatureEntityModel; 
      case HttpStatusCode.forbidden: throw new EmailInUseError(); 
      default: throw new UnexpectedError()

    }
  }
}