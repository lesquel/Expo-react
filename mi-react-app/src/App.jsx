import Contador from './components/contador';

import './App.css';
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contadores Personalizados</h1>
      <Contador titulo="Contador A" numero={0} id="contador-a"/>
      <Contador titulo="Contador B" numero={10} id="contador-b"/>
      <Contador titulo="Contador C" numero={100} id="contador-c"/>
    </div>
  );
}

export default App;