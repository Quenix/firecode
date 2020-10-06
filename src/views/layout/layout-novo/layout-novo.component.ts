import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import router from '@/router';

@Component({
  components: { Footer }
})
export default class LayoutNovo extends Vue{
  name!: '';
  categoria = [];
  categorias = ['ANS', 'Bradesco', 'Sul América'];
  tipo_arquivo = ['XLS', 'CSV', 'TXT', 'XML'];
  tipo_layout = ['posicional', 'delimitado'];
  tabela = [
    {
      "campo": 1,
      "Conteúdo": "Inclusão",
      "Nome": "Tipo do movimento"
    },
    {
      "campo": 2,
      "Conteúdo": "Saúde",
      "Nome": "Benefício"
    }
  ]

  cancelar(){
    router.push('/layout');
  }

  salvar(){
    console.log('salvou!');
  }
}
