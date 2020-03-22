import { Component, Vue } from 'vue-property-decorator';


@Component
export default class DrawerMenu extends Vue {
    public item = 1;

    public items = [
        { text: 'Projects', icon: 'mdi-folder' },
        { text: 'Settings', icon: 'mdi-settings' },
    ];
}
