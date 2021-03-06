import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';

import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import NavBar from './components/navBar';

  
const App: FunctionComponent = () => {

 return (
     <Router>
         <div >     
         <NavBar />
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