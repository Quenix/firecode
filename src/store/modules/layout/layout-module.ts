import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store/index'
import { Layout } from './layout-types';
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';


@Module({ namespaced: true, name: 'layout', dynamic: true, store })
class LayoutStore extends VuexModule {
  layoutList: Layout[] | null = null;

  @MutationAction
  async fetchLayoutList() {
    //const { data: layoutList } =  await api.get<any, AxiosResponse<Layout[]>>('layouts');
    const { data: layoutList } = await api.get<Layout[]>('layouts');
    return { layoutList };
  }

  get todos() {
    return this.layoutList;
  }
}

export default getModule(LayoutStore);
