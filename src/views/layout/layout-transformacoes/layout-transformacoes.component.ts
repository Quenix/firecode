import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import router from '@/router';

@Component({
  components: {Footer}
})
export default class LayoutTransformacoes extends Vue {
  checkbox1 = true;
  checkbox2 = false;
  model = null;
  transformacoes = [
    'Remover caracteres especiais',
    'Completar Zeros à Esquerda',
    'Transformar Maiúscula',
    'Remove Espaços'
  ];
  validacoes = [
    'Obrigatório',
    'Dentro do Range',
    'Duplicado'
  ];
  tabela:any = [
    {
      "campo": 1,
      "Nome": "Tipo do movimento",
      "transformacoes": [],
      "validacoes": []
    },
    {
      "campo": 2,
      "Nome": "Benefício",
      "transformacoes": [],
      "validacoes": []
    },
    {
      "campo": 3,
      "Nome": "Operadora",
      "transformacoes": [],
      "validacoes": []
    },
  ];

  cancelar(){
    router.push('/layout');
  }

  salvar(){
    router.push('/layout/titulo');
  }
}
