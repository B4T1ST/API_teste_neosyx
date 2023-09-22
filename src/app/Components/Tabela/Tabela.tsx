import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Tabela() {
  const dados = [
    { id: 1, atividade: 'Front', descricao: 'Descrição 1', pontos: 10 },
    { id: 2, atividade: 'Back', descricao: 'Descrição 2', pontos: 20 },
    { id: 3, atividade: 'analista', descricao: 'Descrição 3', pontos: 30 },
    { id: 4, atividade: 'dba', descricao: 'Descrição 4', pontos: 40 },
    { id: 5, atividade: 'cientista de dados', descricao: 'Descrição 5', pontos: 50 },
    // Adicione mais dados conforme necessário
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'atividade', headerName: 'Atividade', width: 200 },
    { field: 'descricao', headerName: 'Descrição', width: 300 },
    { field: 'pontos', headerName: 'Pontos', width: 150 },
  ];

  return (
    <div style={{ position:"relative", top:30, left: 150, height: 400, width: '100%' }}>
      <DataGrid
        rows={dados}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}

