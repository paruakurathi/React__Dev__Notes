
const heading = React.createElement('h1',{id:"head"},"React World");
const root  = ReactDOM.createRoot(document.getElementById('react'));//accesing root
root.render(heading);
// console.log(heading);//Object


const parent = React.createElement('div',{id:"parent"},
   [//array
        React.createElement('div',{id:"child1"},
            [React.createElement('h1',{id:"heading"},"H1 tag"),
                React.createElement('h2',{id:"heading"},"H2 tag")
            ]
        ),//end of child1
        React.createElement('div',{id:"child2"},
            [React.createElement('h1',{id:"heading"},"H1 tag"),
                React.createElement('h2',{id:"heading"},"H2 tag")
            ]
        )//end of child2
   ]
)
root.render(parent)
console.log(parent);
