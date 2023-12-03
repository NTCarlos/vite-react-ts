import { useEffect, useState } from 'react'
import { factModel } from '../models/factModel'
import { getCatFacts } from '../services/api'

function Facts() {
    const [response, setResponse] = useState<factModel | null>(null);

    useEffect(() => {
        fetchCatsApi().catch(console.error)
    }, []);

    async function fetchCatsApi() {
        const response: factModel = await getCatFacts();
        if (response) {
            setResponse(response);
        }
    }

    return (
            <h5>{response ? response.fact : 'Loading...'}</h5>
    )
}

export default Facts