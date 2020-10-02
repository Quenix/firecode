import LayoutStore from '@/store/modules/layout/layout-module';
import { Vue, Component } from 'vue-property-decorator';
import Empty from '@/components/Empty/Empty.vue';

@Component({
  components: { Empty }
})
export default class Layout extends Vue {
  emptyMessage = "Nenhum layout registrado";
  page = 1;
  pageCount = 4;
  itemsPerPage = 10;
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
    },
    {
      icon: 'mdi-content-copy',
      text: 'Copiar configuração',
    },
    {
      icon: 'mdi-delete',
      text: 'Excluir',
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
}
