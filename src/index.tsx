// import * as React from 'react'
// import { render } from 'react-dom'

// const Main = (<h1>Markdown Editor</h1>)

// render(Main, document.getElementById('app'))

import * as React from 'react'
import("react-dom").then(render => {
    const Main = (): JSX.Element => {
        return <h1>Markdown Editor</h1>
    }
    render(Main, document.getElementById('app'))
})