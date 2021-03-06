import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return (
    <div className="main">
      <h1>Finn Thye</h1>
      <p>I'm a poet, a mom, a recovering addict, a web developer and a linguist.</p>
      <p>Powerhouse femeninity, battleaxe fairy godmother, I've got your back.</p>
      <ol>
        <li>Princeton Hot Springs</li>
        <li>Prague</li>
        <li>Blackberry-brambled cemeteries in Wales</li>
      </ol>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
  )