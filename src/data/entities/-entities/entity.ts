import { IEntityModel } from "./entity-type";

export type IEntity = {
  id: String, 
  entityType: IEntityModel, 
  avatarUrl: String,
  email: String,
  password: String,
  phone: String,
  createdAt: Date,
  updatedAt: Date,
}