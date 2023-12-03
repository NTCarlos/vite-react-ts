import { useState } from 'react'

function CountButton() {
    const [count, setCount] = useState(0)

    return (
        <a className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer' onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </a>
    )
}

export default CountButton