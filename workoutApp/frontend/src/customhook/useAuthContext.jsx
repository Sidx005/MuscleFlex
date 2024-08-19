import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
// useContext
const useAuthContext = () => {
    const context = useContext(AuthContext)
if (!context) {
    throw Error('blahh blahh')
}
  return context
}

export default useAuthContext