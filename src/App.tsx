import './App.css';
import { Alert } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
function App() {
    const tabs = ['Главная', 'Профиль', 'Оплаты', 'Занятия', 'Аттестации', 'Сообщения', 'Настройки'];

    return (
    <div className="container-fluid">
        <NavBar tabs={tabs} active="Главная"/>
    </div>
  );
}

export default App;
