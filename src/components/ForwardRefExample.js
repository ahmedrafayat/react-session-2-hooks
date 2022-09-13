import { forwardRef } from "react"

const ForwardRefExample = forwardRef((_props, forwardedRef) => {
    return (
        <input ref={forwardedRef} />
    )
})

export default ForwardRefExample