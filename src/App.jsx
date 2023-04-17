//JSX = XML(Html) + Javascript
//Função exportada direto, tem que ser dentro de chaves {}
import {Post} from './Components/Post';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';


import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}




