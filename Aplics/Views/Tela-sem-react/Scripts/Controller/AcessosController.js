

import { 
   mostrarUsuarioLogado,
    insererModaisTela,
     fecharModais,
      sairPagina,
       acessosTodos,
        limpaTela,
         ultimoAcesso,
       } from '../Services/AcessosServices.js';


window.addEventListener( 'DOMContentLoaded', () => { acessosController() });
 function acessosController(){

    

       const demonstrador = document.querySelector('[root]');
       
       acessosTodos( demonstrador );
       setInterval(() => {
         limpaTela( demonstrador ) 
         acessosTodos( demonstrador )
          }, 12000);

         
       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       
       fecharModais( botaoSairModal );
      
      const nomeArmazenado = localStorage.getItem('usuario');
      mostrarUsuarioLogado( nomeArmazenado );
      
      
      const ultimo = document.querySelector('[root-ultimo]');
      
      ultimoAcesso( ultimo );
      
      




}

