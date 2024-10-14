import './App.css'
import TaskList from './components/tasklist/tasklist';
import 'boxicons'
import taskregular96 from './assets/img/taskregular96.png'

function App() {


  return (
    <>
      <div id="app">
        <nav>
          <img src={taskregular96} />
          <h1 className='titulo'>To-Do Now</h1>
        </nav>
        <form action="" className='form-box'>
          <input
            type="text"
            class="input"
            placeholder="Escriba su tarea con un maximo de 50 caracteres"
            maxLength={50}
          />
          <button
            class="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            <box-icon name='plus' ></box-icon></button>
        </form>
        <div className='line-box'>
          <div className='line'></div>
        </div>
        <TaskList/>
      </div>
    </>
  )
}

export default App
