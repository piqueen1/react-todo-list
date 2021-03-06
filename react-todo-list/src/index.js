import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
  return (
    <div>
      <h2>What my kids are doing this morning</h2>
      <ul>
        <li>Read books to each other</li>
        <li>Show each other tablet games</li>
        <li>Eat cuties and bacon and eggs</li>
        <li>Put on bathingsuits</li>
        <li>Go get in the hot springs</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
  )
