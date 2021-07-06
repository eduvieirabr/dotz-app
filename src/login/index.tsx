import React, {useState, useEffect} from 'react';
import {
  ButtonStart,
  Container,
  SubTitle,
  Title,
  CenterView,
  Input,
  Image,
  Label,
  LabelAlert,
} from './styles';
import {AuthActions} from './redux/reducers/auth';
import {createUser, singIng} from './useLogin';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, getUserLoading} from '../login/redux/selectors/auth';
import {ActivityIndicator} from 'react-native';
import locales from '../locales/pt-BR';
import Routes from '../routes';

const Login: React.FC<any> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [logLogin, setLogLogin] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const {error, msg} = useSelector(getUser);
  const loading = useSelector(getUserLoading);

  useEffect(() => {
    setLogLogin(msg);

    if (msg == locales.login.msg_login_ok) {
      navigation.navigate(Routes.Home);
    }
  }, [error, msg]);

  return (
    <Container>
      <CenterView>
        <Image source={require('../assets/images/logo.png')}></Image>
        <Title style={{marginBottom: 60}}>{locales.login.add_usuario}</Title>
        <Label>{locales.login.lbl_email}</Label>
        <Input onChangeText={setEmail} value={email}></Input>
        <Label>{locales.login.lbl_senha}</Label>
        <Input onChangeText={setPwd} value={pwd} secureTextEntry={true}></Input>
        <LabelAlert>{logLogin}</LabelAlert>
        <ActivityIndicator
          size="large"
          hidesWhenStopped={true}
          animating={loading}
        />

        <ButtonStart
          onPress={() => dispatch(AuthActions.requestLogin(email, pwd))}>
          <SubTitle>{locales.login.bt_logar}</SubTitle>
        </ButtonStart>

        <ButtonStart
          style={{marginTop: 10, marginBottom: 40}}
          onPress={() => dispatch(AuthActions.createLogin(email, pwd))}>
          <SubTitle>{locales.login.bt_criar}</SubTitle>
        </ButtonStart>
      </CenterView>
    </Container>
  );
};

export default Login;
