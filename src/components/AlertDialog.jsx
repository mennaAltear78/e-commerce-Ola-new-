import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,

  } from '@chakra-ui/react'
  
import React from 'react'

function Alertdialog({isOpen,onClose,isDeleted,okayHandeler,title='Delete',description='Are you sure'}) {
   
        const cancelRef = React.useRef()
    return (
        <>
          <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />
    
            <AlertDialogContent>
              <AlertDialogHeader>{title}</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
               {description}
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button colorScheme='red' ml={3} onClick={okayHandeler} isLoading={isDeleted} >
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
}

export default Alertdialog