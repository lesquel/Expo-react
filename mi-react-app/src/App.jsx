import Contador from './components/Contador';
import './App.css';
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contadores Personalizados</h1>
      <Contador titulo="Contador lento" inicio={5} paso={1} />
      <Contador titulo="JEREMY" numero={10} id="- Hola"/>
      <Contador titulo="Contador B" numero={80} id="- Hola"/>
    </div>
  );
}

export default App;

