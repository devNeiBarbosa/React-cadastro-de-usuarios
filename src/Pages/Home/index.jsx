import { useRef, useState } from 'react';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';

import ButtonOne from '../../Components/ButtonOne';
import ButtonTwo from '../../Components/ButtonTwo';
import { Background as BackgroundPage, MascaraPage as Mascara } from '../../Components/BackgroundPage';
import { Nav as Navbar, H1 as Title } from '../../Components/NavbarPage';
import {
  ContainerLoadingComponent as ContainerLoading,
  LoadingComponent as Loading,
  MascaraLoadingComponent as MascaraLoading,
} from '../../Components/Loading';

import {
  Container,
  ImageTop,
  Form,
  ContainerInputs,
  Label,
  Input,
  Select,
  ArrowSelect,
} from './style'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const selectGender = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function registerNewUser() {
    setLoading(true); // Exibe o loading e a máscara

    try {
      await api.post('/users', {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        gender: selectGender.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
    } catch (error) {
      console.error('Erro ao registrar novo usuário:', error);
      alert('Erro ao cadastrar usuário.');
    } finally {
      setTimeout(() => {

        // Limpa os campos após o cadastro
        inputName.current.value = '';
        inputAge.current.value = '';
        selectGender.current.value = '';
        inputEmail.current.value = '';
        inputPassword.current.value = '';
        setLoading(false); // Oculta o loading e a máscara
      }, 1000);
    }
  }

  return (
    <Container>

      <Navbar>
        <Title>Cadastrar novo Usuário</Title>
        <ButtonTwo type='button' onClick={() => { navigate('/users-Listing') }}>Cadastros</ButtonTwo>
      </Navbar>

      <ImageTop>
        <img src='./src/assets/users.png' />
      </ImageTop>

      <Form id='formUserRegister'>
        <div>
          <Label>Nome <span>*</span></Label>
          <Input type='text' placeholder='Nome do usuário(a)' ref={inputName} id='inputName' />
        </div>

        <ContainerInputs>
          <div>
            <Label>Idade <span>*</span></Label>
            <Input type='number' placeholder='Idade do usuário(a)' style={{ width: 140 }} ref={inputAge} id='inputAge' />
          </div>

          <div >
            <Label>Gênero <span>*</span></Label>

            <Select defaultValue={"value"} ref={selectGender} id='selectGender'>
              <option value="">Escolha uma opção</option>
              <option value='Masculino'>Masculino</option>
              <option value='Feminino'>Feminino</option>
            </Select>
          </div>
          <ArrowSelect><img src='./src/assets/arrow-select.png' /></ArrowSelect>
        </ContainerInputs>

        <div>
          <Label>E-mail <span>*</span></Label>
          <Input type='email' placeholder='Email do usuário(a)' ref={inputEmail} id='inputEmail' />
        </div>

        <div>
          <Label>Senha <span>*</span></Label>
          <Input type='password' placeholder='Senha do usuário(a)' ref={inputPassword} id='inputPassword' />
        </div>

        <ButtonOne type='button' onClick={registerNewUser}>Cadastrar</ButtonOne>
      </Form>

      <Mascara></Mascara>
      <BackgroundPage src='./src/assets/background.gif' alt='background' />

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

export default Home