import { defineStore, acceptHMRUpdate } from 'pinia';

import type { IColumnType, ITemplate } from 'src/models/interfaces/template.interface';

export const useTemplateStore = defineStore('template', {
  state: () => ({
    template: {
      name: '',
      columns: [{ id: 1, name: '', type: 'text' }],
    } as ITemplate,

    columnCounter: 2,

    columnTypes: [
      { label: 'Texto', value: 'text' },
      { label: 'Número', value: 'number' },
      { label: 'Fecha', value: 'date' },
      { label: 'Email', value: 'email' },
      { label: 'Teléfono', value: 'phone' },
      { label: 'URL', value: 'url' },
    ] as IColumnType[],
  }),

  getters: {},

  actions: {
    /**
     * Agrega una nueva columna a la plantilla
     */
    addColumn() {
      this.template.columns.push({
        id: this.columnCounter++,
        name: '',
        type: 'text',
      });
    },

    /**
     * Elimina una columna de la plantilla
     * @param id - ID de la columna a eliminar
     */
    removeColumn(id: number) {
      if (this.template.columns.length === 1) return;

      this.template.columns = this.template.columns.filter((col) => col.id !== id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTemplateStore, import.meta.hot));
}
