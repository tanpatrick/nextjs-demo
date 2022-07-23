import { DataGrid, GridColDef } from '@mui/x-data-grid';

type DataTableProps<T> = {
  columns: GridColDef[];
  rows: T[];
  loading?: boolean;
};

export default function DataTable<T>(props: DataTableProps<T>) {
  return (
    <div style={{ height: 400, width: '100%', marginTop: 10 }}>
      <DataGrid loading={props.loading} rows={props.rows} columns={props.columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
