import { Component, Vue } from 'vue-property-decorator';


@Component
export default class TransparentTopbar extends Vue {

    /**
     * Emits `toggle-sidedrawer` event on every click.
     */
    public clickHandler() {
        this.$emit('toggle-sidedrawer');
    }
}