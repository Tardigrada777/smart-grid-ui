import { Component, Vue } from 'vue-property-decorator';

import TransparentTopbar from './components/transparent-topbar/TransparentTopbar.vue';

@Component({
    components: {
        TransparentTopbar
    }
})
export default class App extends Vue {

    /**
     * Indicates if drawer should be opened or not.
     */
    public drawer: boolean = false;

    public toggleDrawer() {
        this.drawer = !this.drawer;
    }
}
