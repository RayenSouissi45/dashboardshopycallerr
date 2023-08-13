import Decrease from "../decrease/decrease";
import Increase from "../increase/increase";



function ClientCart({customer}) {
    return (
        <div className="flex flex-row mt-12  h-[84px] border-b ">
                  <div className="flex-row w-[57px] h-[57px] rounded-full  ml-7 mr-2 ">
                    <img
                      className="w-[57px] h-[57px] rounded-full"
                      src={customer.picture}
                      alt="client"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <b>
                      <p className="pl-4 pt-2">{customer.nom}</p>
                    </b>
                    <p className="pl-4 pt-2 text-xs">{customer.email}</p>
                  </div>
                  <div className="flex flex-col ">
                    <div className="bg-gray-200 h-8 w-16 rounded-lg ml-8 pl-1 pt-1">
                      {customer.price} DT
                    </div>
                    
                    {/* <div className="ml-4 mt-2">
                        
                    <Decrease percentNumber='2' color="bg-white" />
                    </div> */}
                     <div className="ml-4 mt-2">
                     {customer.state === 'decrease' ? (
                     <Decrease percentNumber={customer.percentNumber} color="bg-white" />
                       ) : (
                       <Increase percentNumber={customer.percentNumber}  />
                          )}
                        </div>
                  </div>
                  <div className="border-b ml-2 mr-2 mt-2 mb-4" />
                </div>
    )
}
export default ClientCart ;