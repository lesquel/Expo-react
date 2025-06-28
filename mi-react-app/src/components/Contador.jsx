//SE IMPORTA PARA PODER MANEJAR EL ESTADO DEL CONTADOR
import { useState } from 'react';
// TITULO ES EL TITULO DEL CONTADOR
// INICIO ES EL VALOR INICIAL DEL CONTADOR
function Contador({ titulo,  numero, id}) {
    const [contador, setContador] = useState(numero);
  const incrementar = () => { 
    setContador(contador + 1); 
    //ASIGNAR NUEVO VALOR A CONTADOR MAS 1
  };
  const decrementar = () => {
    setContador(contador - 1);
        //ASIGNAR NUEVO VALOR A CONTADOR MENOS 1
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{titulo}{id}</h2>
      <p>Valor actual: {contador}</p>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}
//SIRVE PARA EXPORTAR EL COMPONENTE (FUNCION) CONTADOR A OTRAS VISTAS
export default Contador;
