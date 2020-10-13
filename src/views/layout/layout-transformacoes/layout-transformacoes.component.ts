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
      "Tipo": ["Opção 1", "Opção 2"],
      "Tamanho": "10",
      "atributos" : {
        "implantacao" : "obrigatorio",
        "inclusao": "condicional",
        "exclusao": "opcional",
        "alteracao": "opcional"
      }

    },
    {
      "campo": 2,
      "Nome": "Benefício",
      "Tipo": ["Opção 1", "Opção 2"],
      "Tamanho": "10",
      "atributos" : {
        "implantacao" : "obrigatorio",
        "inclusao": "condicional",
        "exclusao": "opcional",
        "alteracao": "opcional"
      }
    },
    {
      "campo": 3,
      "Nome": "Operadora",
      "Tipo": ["Opção 1", "Opção 2"],
      "Tamanho": "10",
      "atributos" : {
        "implantacao" : "obrigatorio",
        "inclusao": "condicional",
        "exclusao": "opcional",
        "alteracao": "opcional"
      }
    },
  ];

  cancelar(){
    router.push('/layout');
  }

  salvar(){
    router.push('/layout/titulo');
  }
}
