import CocktailList from '../components/CocktailList';
import SearchInput from '../components/SearchInput';

//Display all cocktail

const Home = () => {
  return (
    <div>
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;
