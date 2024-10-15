import { useEffect, useRef, useState } from "react";
import { HotelCardItemProps } from "@/constants/Interfaces";
import { GetPlaceDetails } from "@/services/GlobalAPI";


const HoteCardItem: React.FC<HotelCardItemProps> = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("/placeholder.jpg");

  const hasFetchedData = useRef(false);

useEffect(() => {
    if (hotel.hotelName && !hasFetchedData.current) {
        fetchPhoto();
        hasFetchedData.current = true;
      }
   
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [hotel.hotelName]);

const fetchPhoto = async () => {
         
    const result = await GetPlaceDetails(hotel.hotelName);
    // console.log(result);
    setPhotoUrl(result);

}

  return (
    <a 
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.hotelName)},${encodeURIComponent(hotel.hotelAddress)}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img className="lg:w-full lg:h-[300px] object-cover rounded-lg" src={photoUrl} alt={hotel.hotelName} />
      <div className="my-1">
        <h2 className="font-medium"> {hotel?.hotelName}</h2>
        <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
        <h2 className="text-xs font-medium">💰{hotel?.price}</h2>
        <h2 className="text-xs font-medium">⭐{hotel?.rating}</h2> 
      </div>
    </a>
  );
};

export default HoteCardItem;