import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className='w-full md:max-w-lg'>
      <div className='flex flex-col gap-3 md:text-center lg:hidden'>
        <p className='text-xl font-medium'>Hi, Chriz!👋</p>
        <p className='text-2xl font-bold'>Got a tasty dish in mind?</p>
      </div>
      <div className='w-full mt-3 lg:mt-0 flex gap-3 items-center'>
        <div className='w-full flex items-center gap-3 p-3 rounded-md border border-primary-500'>
          <CiSearch size={24} className='hidden lg:block' />
          <input type='text' placeholder='Search any recipes...' className='w-full outline-none bg-transparent' />
        </div>
        <div className='p-3 bg-accent-900 rounded-md lg:hidden'>
          <CiSearch size={24} className='font-black text-white' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
