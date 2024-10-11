import { Logo } from '@/components';
import { Avatar } from '@nextui-org/react';

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <Logo />
      <div className='flex items-center gap-3'>
        <p className='text-lg font-medium hidden lg:block'>Hi, Chriz!👋</p>
        <div className='w-12 overflow-clip rounded-full'>
          <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default Header;
