import {Vue, Component} from 'vue-property-decorator';

@Component
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

  tabela = [
    {
      "campo": 1,
      "Nome": "Tipo do movimento",
      "Tipo": ["Opção 1", "Opção 2"],
      "Tamanho": "10",
    },
  ]
}
