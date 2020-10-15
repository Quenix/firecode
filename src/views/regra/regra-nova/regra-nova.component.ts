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
  fonte_dados = ['Registro de Movimentação'];

  condicoes:any = [];

  cancelar(){
    router.push('/regras-gerais');
  }

  salvar(){
    router.push('/regras-gerais');
  }

  adicionarCondicao(){
    const condicao = {
      "id": this.index,
      "sub": []
    };

    this.condicoes.push(condicao);
    this.index += 1;
  }

  adicionarSubCondicao(index:any){
    const object = "Dummy";
    index.sub.push(object);
  }

  removerCondicao(index:any){
    this.condicoes.pop(index);
  }

  removerSubCondicao(index:any, sub:any){
    index.sub.pop(sub);
  }
}
