import MyUser from '../../../models/User';


export default class UserState {

    /**
     * Describes current authorized user.
     */
    public authorizedUser: MyUser | null;

    /**
     * Creates initial user store state.
     */
    constructor() {
        this.authorizedUser = null;
    }
}
