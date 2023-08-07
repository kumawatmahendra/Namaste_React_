let heading = React.createElement("div",{id:"parent"},[
              React.createElement("div",{id:"child_1"},[
                React.createElement("h1",{},"hello this is child 1"),
                React.createElement("h1",{},"hello this also child 1")
              ]),
              React.createElement("div",{id:"child_2"},[
                React.createElement("h1",{},"hello this is child 2"),
                React.createElement("h1",{},"hello this also child 2")
])
])

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)