import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, SetBackendData] = useState([{}])

  useEffect(()=> {
    fetch("/").then(
      response => response.json()
    ).then(
      data=> {
        SetBackendData(data)
      }
    )
  })

  return (
    <div className='App'>
      App
    </div>
  )
}

export default App