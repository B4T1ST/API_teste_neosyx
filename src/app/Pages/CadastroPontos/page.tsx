'use client'
import CadastroComponent from '@/app/Components/Cadastro/Cadastro'
import TabelaComponent from '@/app/Components/Tabela/Tabela'
import GraficoComponent from '@/app/Components/Grafico/Grafico'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
//import Cadastro from '@/app/Components/Cadastro/Cadastro';
import React, { useState } from 'react';

import styles from '@/app/styles/Pages/cadastroPontos.module.css'

export default function CadastroPontosPages() {

    const [abaSelecionada, setAbaSelecionada] = useState('cadastro');
    const mostrarAba = (aba: React.SetStateAction<string>) => {
        setAbaSelecionada(aba);
  };

    return(
    <>
    <div className={styles.global}>

        <div className={styles.h1}>
            <h1>Cadastros</h1>
        </div>
        <div className={styles.p}>
            <p>Cadastro de Pontos</p>
        </div>
        <div className={styles.searchBox}>
           
            <div className={styles.setinha}><ArrowBackIcon fontSize='large' /></div><input type="text" className={styles.searchText} placeholder="Pesquisa"/>
             <a href=''><button type='submit' className={styles.searchBtn}><SearchIcon /></button></a>

            <a href=''><button type='submit' className={styles.btnAdd}>Adicionar</button></a>
            <a href=''><button type='submit' className={styles.btnDelete}>Deletar</button></a>
            
        </div>
        <div>
      <ul className="nav">
        <li>
          <button onClick={() => mostrarAba('cadastro')}>Cadastro</button>
        </li>
        <li>
          <button onClick={() => mostrarAba('grafico')}>Gráfico</button>
        </li>
        <li>
          <button onClick={() => mostrarAba('tabela')} className=''>Tabela</button>
        </li>
      </ul>

      {abaSelecionada === 'cadastro' && <CadastroComponent />}
      {abaSelecionada === 'grafico' && <GraficoComponent />}
      {abaSelecionada === 'tabela' && <TabelaComponent/>}
        </div>
    </div>
    </>
    );
}