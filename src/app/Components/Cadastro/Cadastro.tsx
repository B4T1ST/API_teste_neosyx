'use client'
import styles from '@/app/styles/Components/Cadastro.module.css'
import React, { useState } from 'react';
import { Icadastro } from '@/app/types/Cadastro';
import { getApi } from '@/utils/api';


export default function Cadastro() {
    const api = getApi() 
  const [cadastros, setCadastros] = useState<Icadastro[]>([]);
  const [novoCadastro, setNovoCadastro] = useState<Icadastro>({
    id: 0,
    atividades: "",
    descricao: "",
    pontos:0 ,
  }

  );

  function retornaDados(){
    api.get(`/cadastro?loginUsuario=${''}`)
        .then((res)=> {
            console.log(res);
            setR
        })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoCadastro({
      ...novoCadastro,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCadastros([...cadastros, novoCadastro]);
    setNovoCadastro({
      id: 0,
      atividades: "",
      descricao: "",
      pontos: 0,
    });
  };

  return (
    <div className={styles.container}>

        <div className={styles.cadastroCampos}>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>ID:</label>
            <input
                type="text"
                name="id"
                value={novoCadastro.id}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label>Atividade:</label>
            <input
                type="text"
                name="atividade"
                value={novoCadastro.atividades}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label>Descrição:</label>
            <input
                type="text"
                name="descricao"
                value={novoCadastro.descricao}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label>Pontos:</label>
            <input
                type="text"
                name="pontos"
                value={novoCadastro.pontos}
                onChange={handleInputChange}
            />
            </div>
            <button type="submit">Adicionar Cadastro</button>
        </form>
        <h2>Lista de Cadastros</h2>
            <ul>
            {cadastros.map((cadastro, index) => (
                <li key={index}>
                ID: {cadastro.id}, Atividade: {cadastro.atividades}, Descrição:{' '}
                {cadastro.descricao}, Pontos: {cadastro.pontos}
                </li>
            ))}
            </ul>
        </div>

    </div>
     );

   }

