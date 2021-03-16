import React from 'react';

import Feed from '../Feed'
import { 
    Container,
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Gustavo Vasconcelos</h1>
            <h2>@gustavosanvas</h2>

            <p>Studant of Software Engineering at <a href="https://twitter.com/UTFPR_">@UTFPR_</a></p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 24 de Fevereiro de 2000
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>107</strong>
                </span>
                <span>
                    <strong>4 </strong> seguidores
                </span>

            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  )
}

export default ProfilePage;