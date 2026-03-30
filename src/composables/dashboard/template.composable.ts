import type { IColumnType, ITemplate } from 'src/models/interfaces/template.interface';
import { computed, ref } from 'vue';

export function useTemplate() {
  const template = ref<ITemplate>({
    name: '',
    columns: [{ id: 1, name: '', type: 'text' }],
  });

  const columnCounter = ref<number>(2);
  const columnTypes = ref<IColumnType[]>([
    { label: 'Texto', value: 'text' },
    { label: 'Número', value: 'number' },
    { label: 'Fecha', value: 'date' },
    { label: 'Email', value: 'email' },
    { label: 'Teléfono', value: 'phone' },
    { label: 'URL', value: 'url' },
  ]);

  const previewRows = computed(() => {
    return [{}, {}, {}];
  });

  /**
   * Verifica si la plantilla tiene columnas con nombre
   * @returns True si la plantilla tiene columnas con nombre, false en caso contrario
   */
  const hasNamedColumns = computed(() => {
    return template.value.columns.some((col) => col.name.trim() !== '');
  });

  /**
   * Obtiene el label del tipo de columna a partir de su value
   * @param value - Value del tipo (ej: 'text', 'number')
   * @returns Label del tipo (ej: 'Texto', 'Número')
   */
  function getTypeLabel(value: string) {
    const type = columnTypes.value.find((t) => t.value === value);
    return type ? type.label : value;
  }

  /**
   * Agrega una nueva columna a la plantilla
   */
  function addColumn() {
    template.value.columns.push({
      id: columnCounter.value++,
      name: '',
      type: 'text',
    });
  }

  /**
   * Elimina una columna de la plantilla
   * @param id - ID de la columna a eliminar
   */
  function removeColumn(id: number) {
    template.value.columns = template.value.columns.filter((col) => col.id !== id);
  }

  /**
   * Genera las columnas para la previsualización
   * @returns Array de columnas para la previsualización
   */
  function previewColumns() {
    return template.value.columns
      .filter((col) => col.name.trim() !== '')
      .map((col) => ({
        name: `col-${col.id}`,
        label: col.name,
        field: `col-${col.id}`,
        type: getTypeLabel(col.type),
        align: 'left' as const,
      }));
  }

  return {
    // States
    template,
    columnTypes,
    // Computed
    hasNamedColumns,
    previewRows,
    // Actions
    addColumn,
    removeColumn,
    previewColumns,
  };
}
