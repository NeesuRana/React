import React from 'react';
import ReactDOM from 'react-dom/client';


// const child = <div > This is div tag.</div>  //jsx syntax (html like syntax)
const child = (<div id="container">
    <h1>Hellow World!</h1>
    <h2> Hello</h2>
</div>
);

//Functional Component
const Homepage= () =>{
    return (
    <div id='container'>
        <Navbar />
        <Main />
        <Footer />
        {/* <nav> Navbar</nav> */}
        {/* <main> Main Section</main>
        <footer> Footer</footer> */}
    </div>
)
    };

// function Navbar() {
//     return <nav> It is  navbar.</nav>
// }
const Navbar= () =>{
    return <nav>This is navbar.</nav>;
};

const Footer=()=>{
    return(
        <footer>
            <p> This is footer.</p>
        </footer>
    )
};

const Main=()=>{
    return(
        <main>
            <p> This is main section.</p>
        </main>
    )
};

// const child = React.createElement(
//     'div',
//  {id:'child'},
//  [React.createElement('h1', {id: 'heading' }, 'Hello World' ),
//  React.createElement('h2', {id: 'heading2' }, 'Hello World2' ),

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// root.render(child); //function render hunna
root.render(<Homepage/>);
