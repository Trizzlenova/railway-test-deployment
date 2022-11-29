import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    
    return (
        <>
            <span>Current Count: {count}</span>
            <section>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </section>
        </>
    )
}

export default Counter