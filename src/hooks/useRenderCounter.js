import { useEffect, useRef } from "react"

const useRenderCounter = () => {
    const renderCounter = useRef(1);

    useEffect(() => {
        renderCounter.current = renderCounter.current + 1
    })

    return renderCounter.current
}

export default useRenderCounter
