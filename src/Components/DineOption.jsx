import { dineoutRestaurants} from "../Utils/Dinedata"
import DineCard from "./DineCard"
function DineOption() {
  return (
    <div className="w-[80%] container mx-auto mt-20 mb-20">
        <p className="text-2xl font-bold">Discover best restaurants on dineout</p>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
            {
                dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
            }
        </div>
    </div>
  )
}

export default DineOption