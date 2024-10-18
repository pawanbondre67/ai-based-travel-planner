import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { User } from "@/constants/Interfaces";
import { auth } from "@/firebase";
import { FcGoogle } from "react-icons/fc";

const Header: React.FC = () => {

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  
const result: User = React.useMemo(() => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : {};
}, []);

useEffect(() => {
  console.log(result);
}, [result]);

const googleProvider = new GoogleAuthProvider();

const login = async () => {
  try {
     const result= await signInWithPopup(auth, googleProvider);
      
     const user = result.user;

    // Extract access token
  // const idToken = await user.getIdToken(); // Ensure to await this as it returns a promise
  localStorage.setItem('user', JSON.stringify({user }));

  
      setOpenDialog(false);
      window.location.reload();
    
      // alert('Logged in successfully');
    
  } catch (error) {
    alert(`Error: ${(error as Error)?.message}`);
  }
}

const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user"); // Optionally remove user data from local storage
    console.log("User signed out successfully");
    // Redirect to login page or perform other actions
  } catch (error) {
    console.error("Error signing out:", error);
  }

  localStorage.clear();
  window.location.reload();
};


  return (
    <div className="flex p-2 shadow-sm justify-between items-center px-3">
     <a href="/">
     <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> TravelTrail</h1>
     </a>
      <div>
        {result.user ? (
          <div className="flex items-center gap-2">
            <a href="/my-trips">
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={result.user.photoURL}
                  alt=""
                />
              </PopoverTrigger>
              <PopoverContent className="w-20 m-4">
                <h2 onClick={handleLogout} >LogOut</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={()=>{
            setOpenDialog(true);
          }}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
        
        {/* <h2 className='font-bold text-lg'>Sign In with Google</h2> */}

        <Button 
        onClick={login}
        className='w-full mt-2 gap-2'>
          <FcGoogle className='text-xl' /> 
          Sign In with Google
          </Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  );
};

export default Header;
