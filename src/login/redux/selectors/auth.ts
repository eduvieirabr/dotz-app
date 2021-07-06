import {RootState} from '../../../store';
import {AuthParams} from '../reducers/auth';

export const getUser = (state: RootState): AuthParams => {
    return state.auth.data;
};

export const getUserLoading = (state: RootState): boolean => {
    return state.auth.loading;
};

