import { Component, Vue } from 'vue-property-decorator';
import { remote } from 'electron';


@Component
export default class TransparentTopbar extends Vue {

    /**
     * Emits `toggle-sidedrawer` event on every click.
     */
    public clickHandler() {
        this.$emit('toggle-sidedrawer');
    }

    /**
     * Closes main window.
     */
    public close() {
        remote.getCurrentWindow().close();
    }
}