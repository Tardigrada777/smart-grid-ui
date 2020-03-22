import { Component, Vue } from 'vue-property-decorator';

import TransparentTopbar from './components/transparent-topbar/TransparentTopbar.vue';

@Component({
    components: {
        TransparentTopbar
    }
})
export default class App extends Vue {
    public title: string = 'SmartGrid UI';
}
