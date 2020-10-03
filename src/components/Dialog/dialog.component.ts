import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue{
  @Prop()
  show!: boolean;
  items!: [];
}
