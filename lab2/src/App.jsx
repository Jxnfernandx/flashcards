import './App.css'
import {useState} from 'react'


function App() {
const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(1);

const updateCount = () => setCount(count + multiplier);
const buyDoubleStuffed = () => {
    if (count >= 10) {
        setMultiplier(multiplier * 2);
        setCount(count - 10);
    }
}
const buyPartyPack = () => {
    if (count >= 100) {
        setMultiplier(multiplier * 5);
        setCount(count - 100);
    }
}
  return (
    <>
        <div className="App">
            <div className="header">
                <h1>Samosa Selector</h1>
                <h2>Count: {count}</h2>
                <img src="https://t4.ftcdn.net/jpg/03/31/33/73/240_F_331337369_CUJRUzwx4yCBglixWWiv0VvRScMr7VT9.jpg"
                     className="samosa"
                     onClick={updateCount}/>
            </div>

            <div className="container">
                <div className="upgrade">
                    <h3>Double Stuffed </h3>
                    <p>2x per click</p>
                    <button onClick={buyDoubleStuffed}>10 samosas</button>
                </div>

                <div className="upgrade">
                    <h3>Party Pack</h3>
                    <p>2x per click</p>
                    <button onClick={buyPartyPack}>100 samosas</button>
                </div>

                <div className="upgrade">
                    <h3>Full Feast</h3>
                    <p>10x per click</p>
                    <button>1000 samosas</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default App
