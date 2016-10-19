import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <header>
        <h3><img src="pokeball.png"/>{props.title}</h3>
    </header>
)

const Items = () => {
    return (
        <div id="content">
        <ol>
            <li><a href="#">Bulbasaur <span>(Grass,Poison)</span></a></li>
            <li><a href="#">Ivysaur <span>(Grass,Poison)</span></a></li>
            <li><a href="#">Caterpie <span>(Bug)</span></a></li>
            <li><a href="#">Pikachu <span>(Electric)</span></a></li>
            <li><a href="#">Blastoise <span>(Water)</span></a></li>
            <li><a href="#">Metapod <span>(Bug)</span></a></li>
            <li><a href="#">Weedle <span>(Bug,Poison)</span></a></li>
            <li><a href="#">Kakuna <span>(Bug,Poison)</span></a></li>
            <li><a href="#">Nidoran <span>(Poison)</span></a></li>
            <li><a href="#">Vulpix <span>(Fire)</span></a></li>  
        </ol>
        </div>
    )
}
const App = () =>{
    const title = "MY POKEDEX"
    const name = [
        "Bulbasaur","Ivysaur","Caterpie","Pikachu","Blastoise",
        "Metapod","Weedle","Kakuna","Nidoran","Vulpix"
    ]
    const type = [
        "(Grass,Poison)","(Grass,Poison)","(Bug)","(Electric)",
        "(Water)","(Bug)","(Bug,Poison)","(Bug,Poison)","(Poison)","(Fire)"
    ]
    return (
        <section>
            <Header title={title} />
            <Items/>
        </section>
    )
}
const element = document.getElementById('hello')
ReactDOM.render(<App />,element)