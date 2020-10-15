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
  search = null;
  index = 1;
  tabela = [
    {
      "campo": 1,
      "conteudo": "Inclusão",
      "nome": "Tipo do movimento"
    },
    {
      "campo": 2,
      "conteudo": "Saúde",
      "nome": "Benefício"
    },
    {
      "campo": 3,
      "conteudo": "Saúde",
      "nome": "Benefício"
    },
    {
      "campo": 4,
      "conteudo": "Saúde",
      "nome": "Benefício"
    },
    {
      "campo": 5,
      "conteudo": "Saúde",
      "nome": "Benefício"
    },
    {
      "campo": 6,
      "conteudo": "Saúde",
      "nome": "Benefício"
    }
  ]

  cancelar(){
    router.push('/layout');
  }

  salvar(){
    router.push('/layout/titulo');
  }
}
