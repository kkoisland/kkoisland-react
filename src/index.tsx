import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// App.tsx
function App (): ReactElement {
  return (
    <div>
      Welcome!
    </div>
  )
}

ReactDOM.render(
      <App />,
      document.getElementById('root')
)
