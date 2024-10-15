import { HotelOption, TripDataProps } from "@/constants/Interfaces";
import HoteCardItem from "./HotelCardItem";




const Hotel :  React.FC<TripDataProps>  = ({tripData}) => {



  
  const hotelOptions = tripData.length > 0 ? tripData[0].tripData.hotelOptions : [];
  
  // const [hotel, setHotel] = useState<HotelOption[]>(hotelOptions);
  
      



  
  return (

       <div>
       <h2 className="font-bold text-xl mt-3">Hotel Recommmendation</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5">
     {hotelOptions.map((hotel: HotelOption, index: number) => (

      
      
          <div key={index} className="hover:scale-105 transition-all">
              <HoteCardItem hotel={hotel} />
          </div>
        ))}

     </div>


      
    </div>
  );
};

export default Hotel;