import Categories from './ui/Categories';
import SearchBar from './ui/SearchBar';

const Navbar = () => {
  return (
    <div className='w-full flex flex-col gap-3 items-center justify-between lg:flex-row-reverse'>
      <SearchBar />
      <Categories />
    </div>
  );
};

export default Navbar;
