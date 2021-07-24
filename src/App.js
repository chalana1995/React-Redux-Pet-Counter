import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {petIncrement, petDecrement, petFavouriteIncrement, petFavouriteDecrement} from './actions';


function App() {

  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <h1>Pet Counter {petCounter}</h1>
      <button onClick={() => dispatch(petIncrement())}>Add Pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove Pet</button>
      <h2>Number of favorite pet so far {petFavorite}</h2>
      <button onClick={() => dispatch(petFavouriteIncrement())}>Add Favourite Pet Count</button>
      <button onClick={() => dispatch(petFavouriteDecrement())}>Remove Favourite Pet Count</button>
     
    </div>
  );
}

export default App;
