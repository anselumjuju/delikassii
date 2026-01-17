'use client';

import { Logo, Preferences } from '@/components';
import { useUserContext } from '@/utils/UserContextProvider';

import { Avatar, Modal, ModalContent, useDisclosure } from "@heroui/react";

const Header = () => {
  const { name, photoUrl } = useUserContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='w-full flex items-center justify-between'>
      <Logo />
      <div className='h-max flex items-center gap-3 cursor-pointer' onClick={onOpen}>
        <p className='text-lg font-medium hidden lg:block'>Hi, {name}!👋</p>
        <div className='w-12 aspect-square overflow-clip rounded-full'>
          <Avatar src={photoUrl} className='w-full h-full' />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onOpenChange} aria-labelledby='Preferences' backdrop='blur' size='full'>
        <ModalContent>
          <Preferences isModaL={true} onModalClose={onOpenChange} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Header;
