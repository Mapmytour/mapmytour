import { useState, useCallback } from 'react';

export function useOpenAuthModal() {
  const [isOpenAuth, setIsOpen] = useState(false);


  const openDialog = useCallback((flag?:boolean) => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpenAuth,
    openDialog,
    closeDialog
  };
}
