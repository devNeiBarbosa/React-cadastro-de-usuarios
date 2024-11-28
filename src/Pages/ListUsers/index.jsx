import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';

import ButtonTwo from '../../Components/ButtonTwo';
import {Background as BackgroundPage, MascaraPage as Mascara} from '../../Components/BackgroundPage';
import {Nav as Navbar, H1 as Title} from '../../Components/NavbarPage';
import Lixeira from '../../assets/img-lixeira.svg';
import imgUsersListing from '../../assets/usersListing.png';
import {
    ContainerLoadingComponent as ContainerLoading,
    LoadingComponent as Loading,
    MascaraLoadingComponent as MascaraLoading,
  } from '../../Components/Loading';

import { 
    ContainerUser, 
    Container, 
    AvatarUser, 
    UserTextInfo, 
    ButtonLixeira, 
    Ul, 
    UsersListing, 
    
} from './style'


function ListUsers() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users')

            setUsers(data)
        }

        getUsers()
    }, [])

    async function deleteUser(userId) {
        setLoading(true); // Exibe o loading e a máscara
        
        await api.delete(`/users/${userId}`)
        setTimeout(() => {
        const newListUser = users.filter(user => user.id !== userId)
        setUsers(newListUser)

            setLoading(false); // Oculta o loading e a máscara
        }, 1000);
    }

    return (
        <Container>

            <Navbar>
                <Title>Lista de Usuários</Title>
                <ButtonTwo type='button' onClick={() => {navigate('/')}}>Início</ButtonTwo>
            </Navbar>

            <UsersListing src={imgUsersListing} />

            <Ul>
                {users.map(user => (
                    <ContainerUser key={user.id}>

                        <AvatarUser src={user.gender === 'Masculino'
                            ? 'https://avatar.iran.liara.run/public/boy'
                            : 'https://avatar.iran.liara.run/public/girl'}
                            alt="Avatar User"
                        />
                        <div>
                            <UserTextInfo><span>Nome:</span> {user.name}</UserTextInfo>
                            <UserTextInfo><span>Idade:</span> {user.age} anos</UserTextInfo>
                            <UserTextInfo><span>Gênero:</span> {user.gender}</UserTextInfo>
                        </div>

                        <div className='div-2'>
                            <UserTextInfo><span>E-mail:</span> {user.email}</UserTextInfo>
                            <UserTextInfo><span>Senha:</span> **********</UserTextInfo>           
                        </div>
                        <ButtonLixeira onClick={() => deleteUser(user.id)}><img src={Lixeira} alt='Lixeira' /></ButtonLixeira>
                    </ContainerUser>
                ))}
            </Ul>

            <BackgroundPage></BackgroundPage>
            <Mascara></Mascara>

            {loading && (
                <>
                <ContainerLoading id='loading'>
                    <Loading className='one'></Loading>
                    <Loading className='one'></Loading>
                    <Loading className='one'></Loading>
                </ContainerLoading>

                <MascaraLoading />
                </>
            )}

        </Container>
    )
}

export default ListUsers