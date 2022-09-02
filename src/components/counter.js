import { useDispatch, useSelector } from 'react-redux'
export default function Counter(props){

  const counter = useSelector((state) =>{return state.counter});
  const dispatch = useDispatch()

    return(
        <div className="contador-container">

            <h1>{counter}</h1>
            <div>
                <button onClick={()=> {dispatch({type: "INCREMENT"})}} >+</button>
                <button onClick={()=> {dispatch({type: "DECREMENT"})}}>-</button>
            </div>
        </div>
    )
}