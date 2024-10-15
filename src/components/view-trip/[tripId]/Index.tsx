import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import { useToast } from "@/hooks/use-toast"

import { db } from '@/firebase';
import InfoSection from '../components/InfoSection';
import Hotel from '../components/Hotel';
import { TripData } from '@/constants/Interfaces';
import PlacesToVisit from '../components/PlacesToVisit';




const Index: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const hasFetchedData = useRef(false);
  const { toast } = useToast()

  
  const [tripData, setTripData] = useState<TripData[]>([]);

  const GetTripData = async () => {
    if (tripId) {
      try {
        const docRef = doc(db, 'AItrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTripData([docSnap.data() as TripData]); // Assuming the data is a single trip

          toast({
            title: " document founded!"
          })
        } else {
          console.log('No such document!');
          toast({
            title: "No such document!"
          })
        
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        toast({
          title: (error as Error).message
        })
       
      }
    } else {
      console.log('Invalid tripId!');
      toast({
        title: "Inavlid tripId!",
      })
      
    }
  };

  useEffect(() => {
    if (tripId && !hasFetchedData.current) {
      GetTripData();
      hasFetchedData.current = true;
    }
  }, [tripId]);

  return (

    <div className='p-2 md:px-20 lg:px-44 xl:px-50'>
             <InfoSection tripData={tripData} /> 

             <Hotel tripData={tripData}/>

             <PlacesToVisit tripData={tripData} />
    </div>
        
  
    
  );
};

export default Index;