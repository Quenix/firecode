import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import router from '@/router';

@Component({
  components: { Footer }
})
export default class RegraNova extends Vue{
  categoria = [];
  categorias = ['ANS', 'Bradesco', 'Sul América'];
  tipo_movimentacao = [];
  tipo_valor_padrao = ['Numérico', 'Exemplo 2', 'Exemplo 3'];
  tipo_descricao = ['Dias', 'Semanas', 'Meses'];
  search = null;
  index = 1;


  cancelar(){
    router.push('/regras-gerais');
  }

  salvar(){
    console.log('salvou!');
  }

  adicionarSubCondicao(){
    console.log('adicionou sub-condicao')
  }
}
