import {Vue, Component} from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import router from '@/router';

@Component({
  components: { Footer }
})
export default class LayoutTitulo extends Vue{

  items = [
    {
      text: 'Layout',
      disabled: false,
      href: '/layout/titulo',
    },
    {
      text: 'Transformações e Validações',
      disabled: false,
      href: '/layout/titulo',
    }
  ];

  botoes: any =
    {
      "obrigatorio": {
        "icon": "fa-exclamation",
        "color": "#e63946",
        "hover": "Obrigatório"
      },
      "condicional": {
        "icon": "fa-clipboard-check",
        "color": "#1aa4d2",
        "hover": "Condicional"
      },
      "opcional": {
        "icon": "fa-thumbs-up",
        "color": "#43aa8b",
        "hover": "Não-obrigatório"
      }

    }


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
      "campo": 3,
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
      "campo": 4,
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
      "campo": 5,
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
      "campo": 6,
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
  ];

  cancelar(){
    router.push('/layout/novo');
  }

  salvar(){
    router.push('/layout/transformacoes');
  }

  alterarValor(atributo:any, key:any, item:any){
    const aux = atributo;

    if(aux == "obrigatorio")
    item.atributos[key] = "condicional";

    if(aux == "condicional")
    item.atributos[key] = "opcional";

    if(aux == "opcional")
    item.atributos[key] = "obrigatorio";
  }

}
