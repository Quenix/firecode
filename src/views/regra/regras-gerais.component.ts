import {Vue, Component} from 'vue-property-decorator';
import Empty from '@/components/Empty/Empty.vue';
import Dialog from '@/components/Dialog/Dialog.vue'
import router from '@/router';

@Component({
  components: { Empty, Dialog }
})
export default class RegrasGerais extends Vue{
  emptyMessage = "Você não tem nenhuma regra";
  page = 1;
  pageCount = 4;
  itemsPerPage = 10;
  dialog = false;
  filtro = [];
  categorias = ['ANS', 'Bradesco', 'Sul América'];
  headers = [
    {
      text: 'Nome da Regra',
      align: 'start',
      value: 'nome',
      class: 'table-header'
    },
    { text: 'Mensagem', value: 'mensagem', class: 'table-header' },
    { text: 'Ações', value: 'actions', class: 'table-header', sortable: false},
  ];
  items = [
    {
      icon: 'mdi-pencil',
      text: 'Editar',
      action: this.editRegra
    },
    {
      icon: 'mdi-content-copy',
      text: 'Copiar configuração',
      action: this.duplicarRegra
    },
    {
      icon: 'mdi-delete',
      text: 'Excluir',
      action: this.removerRegra
    },
  ];

  regrasList = [
    {
      "id" : "1",
      "nome": "Associado Duplicado",
      "mensagem": "Associado está duplicado no arquivo",
    },
    {
      "id" : "2",
      "nome": "Campos obrigatórios dependentes menor idade ANS",
      "mensagem": "Campos obrigatórios para dependentes menores de idade",
    },
    {
      "id" : "3",
      "nome": "Campos obrigatórios dependentes menor idade ANS",
      "mensagem": "Campos obrigatórios para dependentes menores de idade",
    },
    {
      "id" : "4",
      "nome": "Campos obrigatórios dependentes menor idade ANS",
      "mensagem": "Campos obrigatórios para dependentes menores de idade",
    },
  ]
  loading = true;
  message = "Carregando dados";

  async mounted() {
    this.loading = false;
  }

  criarRegra(){
    router.push('/regras-gerais/novo');
  }

  editRegra(){

  }

  duplicarRegra(){

  }

  removerRegra(){
    this.handleDialog();
    console.log('deletou o layout');
  }
  handleAction(item:any) {
    item.action();

  }

  handleDialog(){
    this.dialog = !this.dialog;
  }
}
