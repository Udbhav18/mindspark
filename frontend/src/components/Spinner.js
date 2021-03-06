import React, { Fragment } from 'react';
import spinner from './spinner.gif'

function Spinner({ gif = spinner }) {
    return (
        <Fragment>
            <img src={gif}
                style={{ width: '50%', margin: 'auto', display: 'block' }}
                alt="Loading..." />
        </Fragment>
    )
}

export default Spinner