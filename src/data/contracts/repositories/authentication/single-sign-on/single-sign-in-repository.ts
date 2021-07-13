import { ISingleSignOnModel } from '@/data/entities/-authentications'

export interface ISingleSignOnRepository< T = any > {
  run: (params: T) => Promise<ISingleSignOnModel>
}