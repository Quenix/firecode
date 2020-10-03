import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';

@Component({
  components: { Footer }
})
export default class LayoutNovo extends Vue{
  name!: '';
  categoria!: [];
}
