import './scss/app.scss';
import { Header } from './layout/Header/Header';
import { Container } from './layout/Container/Container';

function App(): JSX.Element {

  return (
    <div className="App">
        <Header>Ты сегодня покормил кота?</Header>
        <Container/>
    </div>
  );
}

export default App;
