import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';

const columns = [
  {
    field: 'selection',
    headerName: 'Selection',
    width: 120,
    renderCell: (params) => (
      <Checkbox color="default" checked={params.value} style={{ color: '#fff' }} />
    ),
  },

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },

  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
];

export default function AdminTable() {
  return (
    <div className='AdminTable'>
      <DataGrid sx={{color:'#fff',backgroundColor:'#29323C',borderRadius:'20px'}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 ,},
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}