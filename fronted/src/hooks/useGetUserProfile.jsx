import { setSuggestedUsers, setUserProfile } from '@/Redux/authSlice';
import axios from 'axios';
import { X } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const  useGetUserProfile = (userId) => {
   const dispatch=useDispatch();
   useEffect(()=>{
     const fetchUserProfile=async()=>{
        try {
            const res=await axios.get(`http://localhost:3000/api/v1/user/${userId}/profile`,{withCredentials:true})
            if(res.data.success){
              dispatch(setUserProfile(res.data.user))
              console.log(res.data.user)

                
            }
        } catch (error) {
            
        }
     }
     fetchUserProfile();
   },[userId])
}

export default useGetUserProfile