import { ActionTree, ActionContext } from 'vuex';
import UserState from './state';
import RootState from "../../root/state";
import MyUser from '../../../models/User';

import {SET_AUTHORIZED_USER} from "./mutations";


export const SIGN_IN: string = 'signIn';

export async function signIn(
    store: ActionContext<UserState, RootState>
) {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await data.json();

    const myUser = new MyUser(user.username);
    store.commit(SET_AUTHORIZED_USER, myUser);
}

export default {
    signIn
} as ActionTree<UserState, RootState>
