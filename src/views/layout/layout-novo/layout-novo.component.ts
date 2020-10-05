import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import router from '@/router';

@Component({
  components: { Footer }
})
export default class LayoutNovo extends Vue{
  name!: '';
  categoria!: [];
  tipo_arquivo = ['XLS', 'CSV', 'TXT', 'XML'];
  tipo_layout = ['posicional', 'delimitado'];

  cancelar(){
    router.push('/layout');
  }

  salvar(){
    console.log('salvou!');
  }
}
