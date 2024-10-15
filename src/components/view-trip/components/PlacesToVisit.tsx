import { ItineraryPlan, TripDataProps } from "@/constants/Interfaces";
import PlaceCardItem from "./PlaceCardItem";




const PlacesToVisit : React.FC<TripDataProps> = ({tripData}) => {

  const itinerary = tripData.length > 0 ? tripData[0]?.tripData?.itinerary : {};

  return (
    <div className="mt-4">
      <h1 className="font-bold text-lg">Places to Visit</h1>

      <div >
       
        {Object.keys(itinerary).sort((a, b) => {
              const dayA = parseInt(a.replace('day', ''), 10);
              const dayB = parseInt(b.replace('day', ''), 10);
              return dayA - dayB;
            }).map((day: string) => (

                          <div key={day} className=" mt-2 md:mt-4"  >
                                 <h3 className="font-medium text-lg">{day}</h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {itinerary[day].plan.map((plan: ItineraryPlan, index: number) => (
                              <div key={index} >
                                
                                <h2 className="font-medium text-sm text-orange-600">{plan.bestTimeToVisit}</h2>
                          
                                <PlaceCardItem plan = {plan}/>
                              
                              </div>
                            ))}
                              </div>
                          </div>
        ))}
    
      </div>
    </div>
  );
}

export default PlacesToVisit;