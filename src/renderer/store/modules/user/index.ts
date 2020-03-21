import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import UserState from './state';
import VuexModule from "../../VuexModule";


/**
 * User Vuex store module with its own state, getters, actions and mutations.
 *
 * @extends VuexModule<UserState>
 */
export default class User extends VuexModule<UserState> {

    /**
     * Name of the module in Vuex store.
     */
    public static readonly vuexName: string = 'user';

    /**
     * Creates user Vuex module, based on predefined class properties.
     */
    public constructor() {
        super();
        this.getters = getters;
        this.actions = actions;
        this.mutations = mutations;
        this.state = new UserState();
    }
}
