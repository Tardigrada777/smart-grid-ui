import { Component, Vue } from "vue-property-decorator";
import { screen } from 'electron';

@Component
export default class GridSettings extends Vue {
    public get screenInfo() {
        return screen.getCursorScreenPoint();
    }

    public gen() {
    }
}
