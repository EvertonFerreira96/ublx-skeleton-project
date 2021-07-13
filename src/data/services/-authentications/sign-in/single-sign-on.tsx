import { ISignInWithSingleSignOnService } from "@/domain/services/-authentications/sign-in"
import { ISingleSignOnModel } from "@/data/entities/-authentications/";
import { ISingleSignOnClient } from "@/data/protocols/single-sign-on";
import { ISingleSignOnRepository } from "@/data/contracts/repositories/authentication/single-sign-on";

export class SignInWithSingleSignOnService implements  ISignInWithSingleSignOnService {
  constructor(
    private readonly singleSignOnClient: ISingleSignOnClient,
    private readonly singleSignOnRepository: ISingleSignOnRepository
     ){}
  async sign(): Promise<ISingleSignOnModel> {
    const signOnClient = await this.singleSignOnClient.request()
    return this.singleSignOnRepository.run(signOnClient); 
  }
}