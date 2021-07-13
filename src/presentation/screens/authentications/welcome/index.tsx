import React, { useEffect, useState } from 'react';

import {
  Container
  , BannerContainer
  , BannerActionsContent
  , BannerMessageContent
  , Title
  , SubTitle
  , Logo
} from './styles';

import { TouchableOpacityOption } from '@/presentation/components/actions/touchable-option-button';
import { PrimaryActivityIndicator } from '@/presentation/components/loadings/activity-indicator';


import BannerImage from '@/assets/images/backgrounds/background-home.png';
import LogoImage from '@/assets/images/logo/logo-in-folder.png';
import { useAuthenticationContext } from '@/presentation/hooks/authentications';
import { EntityProfileModel } from '@/data/entities';

export const Welcome: React.FC = () => {
  const { handleProfileSelected } = useAuthenticationContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoaded() {
    setImageLoaded(true)
  }

  return (

    <Container>
      <BannerContainer source={BannerImage} style={{
        backgroundColor: '#3C2000',
        opacity: 0.95
      }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        onLoadEnd={() => handleImageLoaded()}
      >

        <BannerMessageContent>{
          imageLoaded
            ?
            <>
              <Logo source={LogoImage} />
              <Title>Agilidade {`\n`}na coleta e {`\n`}descarte de {`\n`}resíduos.</Title>
              <SubTitle>Em poucos cliques você encontra o serviço{`\n`}necessário com o melhor preço, tudo na{`\n`}palma da sua mão.</SubTitle>
            </>
            :
            <PrimaryActivityIndicator />
        }
        </BannerMessageContent>

        <BannerActionsContent>
          <TouchableOpacityOption title="Pessoa Física" subTitle="Reformas simples" onPress={() => handleProfileSelected(EntityProfileModel.natureEntity)} />
          <TouchableOpacityOption title="Empresa" subTitle="Mais de uma reforma" />
        </BannerActionsContent>
      </BannerContainer>
    </Container>
  )
}