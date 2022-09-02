import { useSelector } from 'react-redux'

export default function Header(props){
    const counter = useSelector((state) =>{return state.counter});
    return(
        <header>
            <h1>Header</h1>
            <h2>{counter}</h2>
        </header>
    )
}