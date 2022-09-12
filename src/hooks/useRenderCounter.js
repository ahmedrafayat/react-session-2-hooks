import { useRef } from "react"

const useRenderCounter = () => {
    const renderCounter = useRef(0);

    renderCounter.current = renderCounter.current + 1

    return renderCounter.current
}

export default useRenderCounter
