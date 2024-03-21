import './App.css'
import {useSelector,useDispatch} from 'react-redux'

function App() {

const todo = useSelector(state=>state. todoReducer)
const dispatch = useDispatch()
console.log(todo);

  return (
    <>
      <div className="justify-content-center align-items-center container p-5 border rounded 80vh">
        <h1 className='fw-bolder'>My Todo List</h1>

        <div style={{ marginLeft: "0px" }} className="d-flex mt-4">

          <input className='form-control' style={{ width: '350px', height: '50px' }} type="text" />
          <button style={{ width: '150px', height: '50px' }} className='btn btn-info ms-3' type='submit'>SUBMIT</button>

        </div>

        <div style={{height:'50px'}} className='d-flex  fw-bolder bg-success mt-5 align-items-center'>
          <input style={{height:'30px',width:'30px'}} className='ms-3' type="checkbox" />
          <div className='bg-success ms-3 '><h5>todo 1</h5></div>
          <button  className='btn btn-danger  ms-auto me-3'>Delete</button>

        </div> 
        <h4>Total complete items : 3</h4> 
        
          </div>
    </>
  )
}

export default App
