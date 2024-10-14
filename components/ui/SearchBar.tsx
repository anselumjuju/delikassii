'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isNaN(Number(searchQuery)) || searchQuery.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);
    router.push(`/search/${searchQuery}`);
  };

  return (
    <div className='w-full md:max-w-lg'>
      <div className='flex flex-col gap-3 md:text-center lg:hidden'>
        <p className='text-xl font-medium'>Hi, Chriz!👋</p>
        <p className='text-2xl font-bold'>Got a tasty dish in mind?</p>
      </div>
      <div className='w-full mt-3 lg:mt-0 flex gap-3 items-center'>
        <form className='w-full flex items-center gap-3 p-3 rounded-md border border-primary-500' onSubmit={handleSearch}>
          <CiSearch size={24} className='hidden lg:block' />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='text'
            placeholder='Search any recipes...'
            className='w-full outline-none bg-transparent'
          />
        </form>
        <div className='p-3 bg-accent-900 rounded-md lg:hidden' onClick={handleSearch}>
          <CiSearch size={24} className='font-black text-white' />
        </div>
      </div>
      {error && <p className='text-sm text-red-700'>Please enter a valid search query.</p>}
    </div>
  );
};

export default SearchBar;
