import LayoutStore from '@/store/modules/layout/layout-module';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  data () {
    return {
      page: 1,
      pageCount: 4,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Modelos Disponíveis',
          align: 'start',
          value: 'nome',
        },
        { text: 'Tipo de Arquivo', value: 'tipo_arquivo' },
        { text: 'Tipo de Layout', value: 'tipo_layout' },
        { text: 'Ações', value: 'actions'},
      ],
      items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        },
        {
          icon: 'mdi-send',
          text: 'Send',
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
        },
      ],
    }
  },
})
export default class Layout extends Vue {

  loading = true;
  message = "Carregando dados";

  async mounted() {
    await LayoutStore.fetchLayoutList();
    this.loading = false;
  }

  get layoutList (){
    return LayoutStore.layoutList || [];
  }
}
