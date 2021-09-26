import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { ReactComponent as Logo } from './models/logo.svg';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
  
const App: FunctionComponent = () => {

 return (
     <Router>
         <div>
             <nav>
                 <div className="nav-wrapper teal">
                    <Link to="/" className="brand-logo center">
                         <Logo width='50%' />
                    </Link>
                 </div>
             </nav>
             <Switch>
                 <Route exact path="/" component={PokemonList} />
                 <Route exact path="/pokemons" component={PokemonList} />
                 <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                 <Route exact path="/pokemons/:id" component={PokemonDetail} />
                 <Route  component={PageNotFound} />
             </Switch>
         </div>
     </Router>
 )
}
  
export default App;