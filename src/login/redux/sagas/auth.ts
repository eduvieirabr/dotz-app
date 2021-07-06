import { put, takeLatest, call } from 'redux-saga/effects';
import { AuthActions, AuthType, AuthParams } from '../reducers/auth';
import { RequestLogin } from '../reducers/auth';
import { createUser, singIng, storeData } from '../../useLogin';
import locales from '../../../locales/pt-BR.js';

async function getLogin(email: string, pwd: string)  {
    const response = await singIng(email,pwd);    
    return response;
}

function* getSingIn(action: RequestLogin) {
    const response : string = yield call(getLogin,action.email, action.pwd);
    let error: boolean = false;

    if (
        response == locales.login.msg_muitas_requisicoes ||
        response == locales.login.msg_novo_user_error_invalido ||
        response == locales.login.msg_senha_errada
    ) {
        error = true;
    }

    const data: AuthParams = {
        email: action.email,
        msg: response,
        error,
    };

    yield put(AuthActions.successCreateLogin(data));

    if (!error) {
        storeData('login', data);
    }
}

async function createLogin(email: string, pwd: string)  {
    const response = await createUser(email,pwd);    
    return response;
}

function* newUser(action: RequestLogin) {
    const response : string = yield call(createLogin,action.email, action.pwd);
    let error: boolean = false;

    if (
        response == locales.login.msg_novo_user_error_existe ||
        response == locales.login.msg_novo_user_error_invalido
    ) {
        error = true;
    }
    const data: AuthParams = {
        email: action.email,
        msg: response,
        error,
    };
    yield put(AuthActions.successCreateLogin(data));
}

export default function* root() {
    yield takeLatest(AuthType.CREATE_LOGIN, newUser);
    yield takeLatest(AuthType.REQUEST_LOGIN, getSingIn);
}
