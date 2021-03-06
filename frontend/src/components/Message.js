import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisplay(false)
        }, 2000)
    }, [])

    return (
        <>
            {display &&
                <Alert variant={variant}>
                    {children}
                </Alert>}
        </>
    )
}

Message.defaultProps = {
    variant: 'info'
}
export default Message
