import LayoutStore from '@/store/modules/layout/layout-module';
import { Vue, Component } from 'vue-property-decorator';
import Empty from '@/components/Empty/Empty.vue';
import Dialog from '@/components/Dialog/Dialog.vue'
import router from '@/router';

@Component({
  components: { Empty, Dialog }
})
export default class Layout extends Vue {
  emptyMessage = "Nenhum layout registrado";
  page = 1;
  pageCount = 4;
  itemsPerPage = 10;
  dialog = false;
  headers = [
    {
      text: 'Modelos Disponíveis',
      align: 'start',
      value: 'nome',
    },
    { text: 'Tipo de Arquivo', value: 'tipo_arquivo' },
    { text: 'Tipo de Layout', value: 'tipo_layout' },
    { text: 'Ações', value: 'actions'},
  ];
  items = [
    {
      icon: 'mdi-pencil',
      text: 'Editar',
      action: this.editLayout
    },
    {
      icon: 'mdi-content-copy',
      text: 'Copiar configuração',
      action: this.duplicarLayout
    },
    {
      icon: 'mdi-delete',
      text: 'Excluir',
      action: this.removeLayout
    },
  ];
  loading = true;
  message = "Carregando dados";

  async mounted() {
    await LayoutStore.fetchLayoutList();
    this.loading = false;
  }

  get layoutList (){
    return LayoutStore.layoutList || false;
  }

  handleAction(item:any) {
    item.action();

  }

  handleDialog(){
    this.dialog = !this.dialog;
  }

  removeLayout(){
    this.handleDialog();
    console.log('deletou o layout');
  }

  editLayout(){
    console.log('editou layout');
  }

  duplicarLayout(){
    console.log('editou layout');
  }

  criarLayout(){
    router.push('/layout/novo');
  }
}
