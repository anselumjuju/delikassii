'use client';

import { aiBurgerImage } from '@/public';
import { prefCategories } from '@/utils/constants';
import { useUserContext } from '@/utils/UserContextProvider';
import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const Preferences = ({ isModaL = false, onModalClose = () => {} }: { isModaL?: boolean; onModalClose?: () => void }) => {
  const { name, photoUrl, pref, updateStorage } = useUserContext();
  const [inputName, setInputName] = useState(name);
  const [inputPhotoUrl, setInputPhotoUrl] = useState(photoUrl !== '' ? photoUrl : 'https://i.pravatar.cc/150?img=11');
  const [inputPref, setInputPref] = useState<string[]>(pref);

  const [error, setError] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setInputPhotoUrl(base64String);
        localStorage.setItem('uploadedImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputName.trim().length === 0) {
      setError('Name cannot be empty');
      return;
    }

    if (inputPref.length < 4) {
      setError('Select at least 4 preferences.');
      return;
    }

    setError('');
    updateStorage({ name: inputName, photoUrl: inputPhotoUrl, pref: inputPref });

    if (isModaL) onModalClose();
  };

  return (
    <div className='w-full h-screen py-5 px-2 flex items-stretch justify-center gap-4'>
      <div className='w-full h-full hidden lg:block rounded-lg overflow-hidden'>
        <Image src={aiBurgerImage} alt='Burger' className='w-full h-full object-cover' />
      </div>

      <div className='w-full h-full flex items-center'>
        <div className='w-full max-w-[500px] h-full max-h-[1100px] mx-auto flex flex-col items-center justify-around lg:justify-evenly gap-5 overflow-y-auto'>
          <h1 className='text-4xl font-semibold font-raleway tracking-wide'>
            Profile <span className='-mx-1 text-accent-900 italic font-bold font-dancingScript text-2xl'>&</span> Preferences
          </h1>
          <form className='w-full h-max flex flex-col items-stretch justify-evenly gap-4' onSubmit={handleSubmit}>
            <div className='w-full h-full flex flex-col items-stretch justify-evenly gap-4'>
              <div className='w-full flex flex-col items-center justify-center gap-5'>
                <Image
                  src={inputPhotoUrl}
                  alt={inputName}
                  width={64}
                  height={64}
                  className='w-full max-w-24 aspect-square object-cover rounded-full'
                />
                <label htmlFor='fileInput' className='px-4 py-2 bg-accent-900 text-white rounded-md cursor-pointer'>
                  Upload Image
                </label>
                <input id='fileInput' type='file' accept='image/*' onChange={handleImageUpload} style={{ display: 'none' }} />
              </div>
              <div className='w-full flex flex-col items-stretch gap-5'>
                <p className='text-lg font-medium'>Enter you name</p>
                <input
                  type='text'
                  placeholder='Enter your name'
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className='w-full px-3 py-4 bg-transparent rounded-lg border border-primary-500 outline-none'
                />
              </div>
              <div className='w-full flex flex-col items-stretch gap-5'>
                <p className='text-lg font-medium'>Select your preferences</p>
                <CheckboxGroup orientation='horizontal' color='success' defaultValue={pref} className='w-full'>
                  <div className='w-full grid grid-cols-2 gap-3 gap-y-6'>
                    {prefCategories.map((item, idx) => (
                      <Checkbox
                        key={idx}
                        value={item.name}
                        onChange={() =>
                          setInputPref(
                            inputPref.includes(item.name) ? inputPref.filter((prefItem) => prefItem !== item.name) : [...inputPref, item.name]
                          )
                        }
                        classNames={{
                          base: 'w-full flex items-center justify-start gap-2',
                          icon: 'text-white',
                        }}>
                        {item.display_name}
                      </Checkbox>
                    ))}
                  </div>
                </CheckboxGroup>
              </div>
            </div>
            {error && <p className='text-sm text-center text-red-600 -mt-2'>{error}</p>}
            <button type='submit' className='w-full rounded-md px-4 py-3 bg-accent-900 text-secondary-500 text-base font-semibold'>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
