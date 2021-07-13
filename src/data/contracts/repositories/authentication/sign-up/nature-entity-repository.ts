import { INatureEntityModel } from '@/data/entities'

export interface SignUpNatureEntityRepository {
  run: () => Promise<INatureEntityModel>
}