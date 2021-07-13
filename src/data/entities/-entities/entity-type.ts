import { IEntity } from '@/domain/entities';
type IEntityModel = IEntity;

enum EntityProfileModel {
  cityHall = 6,
  Landfill = 4,
  landfillStaff = 3,
  legalEntity = 2,
  legalEntityStaff = 5,
  natureEntity = 1,
  TransportCompanyFreelancerSmallVolumes = 7,
  TransportCompanyFreelancerSkipBin = 8,
  TransportCompanyFreelancerTruck= 9,
  TransportCompanyFreelancerHeadOffice = 10,
  TransportCompanyFreelancerHeadOfficeDriver = 11, 
  Ubelix = 12, 
  Urpv = 13, 
  UrpvStaff = 14,
} 

export {
  IEntityModel,
  EntityProfileModel
}