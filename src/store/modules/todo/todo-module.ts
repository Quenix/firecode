import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store/index'
import { Todo } from './todo-types';
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';

@Module({ namespaced: true, name: 'todo', dynamic: true, store })
class TodoStore extends VuexModule {
  todoList: Todo[] | null = null;

  @MutationAction
  async fetchTodoList() {
    const { data: todoList } = await api.get<any, AxiosResponse<Todo[]>>('todos');
    return { todoList };
  }

  get todos() {
    return this.todoList;
  }
}

export default getModule(TodoStore);
