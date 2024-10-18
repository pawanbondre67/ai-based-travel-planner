// import React from 'react'

import { useEffect, useState } from 'react';

import { useToast } from "@/hooks/use-toast"

import { SingleValue } from 'react-select';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_prompt, Place,places, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import { Button } from '../ui/button';
// import { toast } from 'sonner';
import { chatSession } from '@/services/AImodel';

import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const googleProvider = new GoogleAuthProvider();



// Define the Option type
type Option = {
  label: string;
  value: string;
};


function Create_trip() {

  const { toast } = useToast();

  const [openDialog, setOpenDialog] = useState<boolean>(false);
 
  // const [place, setPlace] = useState<SingleValue<Option> | null>(null);

  const [formData , setFormData] = useState<{ [key: string]: string }>({});

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();



  const handleInputChange = (name: string, value: string | SingleValue<Option> | Place | null) => {
        setFormData({
          ...formData,
          [name]: typeof value === 'string' ? value : value && 'label' in value ? value.label : value ? value.name : ''
        });
      }

  useEffect(() => {
    toast({
      title: "Due to api issue , plz select the destination from dropdown",
    })
  }, [toast])

  const login = async () => {
    try {
       const result= await signInWithPopup(auth, googleProvider);
        
       const user = result.user;
      //  console.log(user); // This will log the user information

      // Extract access token
    // const idToken = await user.getIdToken(); // Ensure to await this as it returns a promise
    localStorage.setItem('user', JSON.stringify({user }));

    
        setOpenDialog(false);
        OnGenerateTrip(); 
        // alert('Logged in successfully');
      
    } catch (error) {
      alert(`Error: ${(error as Error)?.message}`);
    }
  };


  //saving ai generated trip plan in db

  const saveTrip = async (TripData: string )=>{

     setLoading(true);
    
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    console.log(user.user.email);
    const docId = Date.now().toString();
    console.log(docId);
    const userId = user.user.uid;

    await setDoc(doc(db, "AItrips", docId),
  {
     userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user.user.email,
      id: docId,
      userId: userId,
  });

  setLoading(false);
  navigate(`/view-trip/${docId}`);

  }



  const OnGenerateTrip = async () => {
        const userString = localStorage.getItem('user');
        let user = null;
        try {
          user = userString ? JSON.parse(userString) : null;
        } catch (error) {
          console.error('Error parsing user JSON:', error);
         
          setOpenDialog(true);
          return;
        }
          if (!user) {

          setOpenDialog(true);
          return;
        }


    if(Number(formData?.noOfdays) > 5 || !formData?.destination  || !formData?.budget || !formData?.traveler) 
      {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "Plz fill all the fields",
        })
      return;
    }
    // console.log(formData);

    setLoading(true);

    const FINAL_PROMPT = AI_prompt
    .replace('{destination}', formData?.destination)
    .replace('{totalDays}', formData?.noOfdays)
    .replace('{traveler}', formData?.traveler)
    .replace('{budget}', formData?.budget);

    console.log(FINAL_PROMPT);

  
  try {
    // const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
    // console.log(apiKey); // This should log the API key
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const responseText =  result?.response?.text();
      // console.log(responseText);
     
     setLoading(false);
     saveTrip(responseText);
    
  } catch (error) {
    console.error('Error generating trip:', error);
    toast({
      description: "Fill all the fields",
    })
  }
  }







  // //select place temp code
  const [searchTerm, setSearchTerm] = useState<string>('');
  // const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(true); // Start with dropdown visible

  // Filter places based on search term
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (place: Place) => {
    handleInputChange('destination', place);
    setSearchTerm(place.name); // Show the selected place's name in the input field
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true); // Show the dropdown while typing
  };




  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-xl">Tell us your travel preferences 🏕️🏝️  </h2>
      <p className="mt-3 text-gray-500 text-sm lg:text-2xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <div >
          <h2 className="text-lg my-3 font-medium">What is destination of choice?</h2>

          <input
          type="text"
          value={searchTerm}
          onChange={handleInputChanges}
          placeholder="Search for a place..."
          className="border p-2 w-full mb-2"
        />

         {/* Show the dropdown only if there is a search term and showDropdown is true */}
        
      {showDropdown && (
        <div className="border p-2 max-h-40 overflow-y-auto">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => handleSelect(place)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {place.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No places found</div>
          )}
        </div>
      )}
    
          
          {/* <GooglePlacesAutocomplete
      apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
      selectProps={{
        value :place ,
        onChange: (place) => {
          setPlace(place);
          handleInputChange('destination', place);
      }}
    }
    /> */}
        </div>
        
      <div>
        <h2 className="text-lg my-3 font-medium">How many days are you planning your trip ?</h2>
        <input type="number"
        placeholder='Ex.3' 
        onChange={(e)=>handleInputChange('noOfdays', e.target.value)}
        className="border border-gray-300 rounded-md w-full p-2" />
      </div>
      </div>

      <div>
      <h2 className="text-lg my-3 font-medium">What is your Budget?</h2>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
      {SelectBudgetOptions.map((item,index)=>(
        <div key={index}
        onClick={()=>handleInputChange('budget', item.title)}
         className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
          ${formData?.budget== item.title&& 'shadow-lg border-black'}
           `}>
          <h2 className='text-4xl'>{item.icon}</h2>
          <h2 className='font-bold text-lg'>{item.title}</h2>
          <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          
        </div>
      ))}
     </div>
      </div>


      <div className='mt-9'>
      <h2 className="text-lg my-3 font-medium ">What do you plan on traveling with on your next adventure?</h2>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
      { SelectTravelList.map((item,index)=>(
        <div key={index}
        
        onClick={()=>handleInputChange('traveler', item.people)}
        className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
          ${formData?.traveler== item.people&& 'shadow-lg border-black'}
           `}>
          <h2 className='text-4xl'>{item.icon}</h2>
          <h2 className='font-bold text-lg'>{item.title}</h2>
          <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          
        </div>
      ))}
     </div>
      </div>

      <div className='my-6 flex justify-end'>
      <Button 
      disabled={loading}
      onClick={OnGenerateTrip} >
        {
          loading ?
           <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />
            : 'Generate Trip'
        }
        </Button>
      
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
}

export default Create_trip;
