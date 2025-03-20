
import { useState, useCallback } from 'react';

export function useBookNowDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFromEnquiry, setIsFromEnquiry] = useState(false);


  const openDialog = useCallback((flag?:boolean) => {
    setIsFromEnquiry(flag||false)
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isFromEnquiry,
    isOpen,
    openDialog,
    closeDialog
  };
}
