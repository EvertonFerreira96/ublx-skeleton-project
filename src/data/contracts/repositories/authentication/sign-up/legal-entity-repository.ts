import { ILegalEntityModel } from '@/data/entities'

export interface SignUpLegalEntityRepository {
  run: () => Promise<ILegalEntityModel>
}