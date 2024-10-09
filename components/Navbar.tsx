import Categories from './ui/Categories';
import SearchBar from './ui/SearchBar';

const Navbar = () => {
  return (
    <div className='w-full mt-2 flex flex-col gap-4 items-center justify-between lg:flex-row-reverse'>
      <SearchBar />
      <Categories />
    </div>
  );
};

export default Navbar;
