import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Empty extends Vue{
  @Prop() message!: string;
}
