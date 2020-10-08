import {Vue, Component} from 'vue-property-decorator';
import Empty from '@/components/Empty/Empty.vue';
import Dialog from '@/components/Dialog/Dialog.vue'
import router from '@/router';

@Component({
  components: { Empty, Dialog }
})
export default class Coletores extends Vue{
  emptyMessage = "Você não tem nenhuma regra";
  page = 1;
  pageCount = 4;
  itemsPerPage = 10;
  dialog = false;
  filtro = [];
  categorias = ['ANS', 'Bradesco', 'Sul América'];
  headers = [
    {
      text: 'Contrato',
      align: 'start',
      value: 'contrato',
      class: 'table-header'
    },
    { text: 'Sub-Contrato', value: 'subcontrato', class: 'table-header' },
    { text: 'Operadora', value: 'operadora', class: 'table-header' },
    { text: 'Coletores', value: 'mensagem', class: 'table-header' },
    { text: 'Ações', value: 'actions', sortable: false, class: 'table-header'},
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
  coletores = [
    'FTP', 'EMAIL', 'Sharepoint', 'Webservice', 'Drive'
  ];

  regrasList = [
    {
      "id" : "1",
      "contrato": "12345678/2020",
      "subcontrato" : "12345678/2020-SP",
      "operadora" : "Amil",
      "mensagem": "Associado está duplicado no arquivo",
    },
    {
      "id" : "2",
      "contrato": "12345678/2020",
      "subcontrato" : "12345678/2020-SP",
      "operadora" : "Amil",
      "mensagem": "Campos obrigatórios para dependentes menores de idade",
    },
    {
      "id" : "3",
      "contrato": "12345678/2020",
      "subcontrato" : "12345678/2020-SP",
      "operadora" : "Amil",
      "mensagem": "Campos obrigatórios para dependentes menores de idade",
    },
    {
      "id" : "4",
      "contrato": "12345678/2020",
      "subcontrato" : "12345678/2020-SP",
      "operadora" : "Amil",
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
