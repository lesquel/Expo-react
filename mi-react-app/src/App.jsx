import Contador from './components/Contador';
import './App.css';
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contadores Personalizados</h1>
      <Contador titulo="Contador lento" inicio={5}  />
      <Contador titulo="JEREMY" numero={10} />
      <Contador titulo="Contador B" numero={80}/>
    </div>
  );
}

export default App;

