interface IColumn {
  id: number;
  name: string;
  type: string;
}

interface IColumnType {
  value: string;
  label: string;
}

export interface ITemplate {
  name: string;
  columns: IColumn[];
}
