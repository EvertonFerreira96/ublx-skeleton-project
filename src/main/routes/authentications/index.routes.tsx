import React from 'react';

import { Welcome } from '@/presentation/screens/authentications/welcome';

import { NatureEntitiesAuthenticationRoutes } from "./nature-entities/index.routes";
import { LegalEntitiesEmployeeAuthenticationRoutes, LegalEntitiesAuthenticationRoutes } from "./legal-entities/index.routes";

import { useAuthenticationContext } from '@/presentation/hooks/authentications';
import { EntityProfileModel } from '@/data/entities';

export const AuthenticationRoutes: React.FC = () => {

    const { profile } = useAuthenticationContext();
    switch (profile) {
        case EntityProfileModel.natureEntity:
            return <NatureEntitiesAuthenticationRoutes />
        case EntityProfileModel.legalEntity:
            return <LegalEntitiesAuthenticationRoutes />
        case EntityProfileModel.legalEntityStaff:
            return <LegalEntitiesEmployeeAuthenticationRoutes />
        default:
            return <Welcome />;
    }
}