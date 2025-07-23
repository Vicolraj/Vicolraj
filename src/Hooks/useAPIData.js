import { useEffect, useState } from "react";

export default function useAPIData(url, method) {
    const [output, setOutput ] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    if(method || method.toLowerCase() === 'fetch'){
        useEffect(() => {
            fetch(url, {method: "GET"})
                .then(res => res.json())
                .then(data => setOutput(data))
                .finally(() => {setIsLoading(false)})

            },
        [])

    }else if(!method || method.toLowerCase() === 'post'){
        alert("postin no available yet")
    }

    return{
        output, isLoading
    }
}