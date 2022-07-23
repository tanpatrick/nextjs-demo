import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import DataTable from '~/components/DataTable';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    renderCell: (params) => (
      <Link href={`/user/${params.row.id}`}>
        <a>{params.row.id}</a>
      </Link>
    ),
  },
  { field: 'firstName', headerName: 'First name', width: 110 },
  { field: 'lastName', headerName: 'Last name', width: 110 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 250,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'createdAt',
    headerName: 'Created on',
    width: 180,
    valueFormatter: (params) => new Intl.DateTimeFormat('en-NZ', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(params.value)),
  },
  {
    field: 'updatedAt',
    headerName: 'Updated on',
    width: 180,
    valueFormatter: (params) => new Intl.DateTimeFormat('en-NZ', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(params.value)),
  },
];

type User = {
  id: Number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/user');
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    })();
  }, []);

  return <DataTable columns={columns} loading={loading} rows={users} />;
}
