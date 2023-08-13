import ClientCart from "../clientCart";
import NavbarForm from "../form/navbarForm";
import customer1 from "../../pictures/Customers/customer1.png" ;
import customer2 from "../../pictures/Customers/customer2.png" ;
import customer3 from "../../pictures/Customers/customer3.png" ;
import customer4 from "../../pictures/Customers/customer4.png" ;

function MostLoyalCustomers() {
  const CustomersTables = [
      {state: "decrease", nom: "Hazem abid" , percentNumber: "12.8" ,email: "Hazemabid@gmail.com", picture: customer1, price: "536"},
      {state: "increase", nom: "Karem Jouini" , percentNumber: "16" ,email: "Karemjou@gmail.com", picture: customer2, price: "504"},
      {state: "decrease", nom: "Ali Thabet" , percentNumber: "7" ,email: "Alithabet@gmail.com", picture: customer3, price: "420"},
      {state: "increase",  nom: "Amira Ajili" ,percentNumber: "4" ,email: "Amiraajili@gmail.com", picture: customer4, price: "360"},
  ];
  
    return (
     
        <div className="h-auto rounded-lg ml-6 pb-8 mt-4 mb-6 pt-8 w-[340px] bg-white justify-center items-center">
                <div className="flex flex-row pl-12">
                  <div className="col3 w-4 h-8 rounded-md bg-blue-200" />
                  <b>
                    <h5 className="text-lg tracking-wider pl-2 ">
                      Les clients les plus fidéles
                    </h5>
                  </b>
                </div>
                <div className="pl-6">
                <NavbarForm placeholderText={"Rechercher par nom ou par email .."} />
                </div>
                <div className="flex flex-row">
                  <button className="w-40 h-16 bg-gray-200 ml-8 mt-4 rounded-2xl hover:bg-gray-200">
                    <b>
                      <p>Active</p>
                    </b>
                  </button>
                  <button className="w-40 h-16 bg-white ml-4 mr-8 mt-4 rounded-2xl hover:bg-gray-200">
                    <b>
                      <p>Nouveau</p>
                    </b>
                  </button>
                </div>
                
                {/* <ClientCart state="increase" percentNumber="4"/>
               
                <ClientCart state="increase" percentNumber="4"/>
                
                <ClientCart state="increase" percentNumber="4"/>
                
                <ClientCart state="increase" percentNumber="4"/>
                
                <ClientCart state="increase" percentNumber="4"/> */}
                {CustomersTables.map((customer, index) => (
  <ClientCart key={index} customer={customer} />
))}

                <button className="bg-white w-40  hover:bg-gray-50 ml-28 pl-12  mt-8 text-gray-800 font-bold py-2 px-4 mr-6 flex flex-row border rounded-xl">
                  <h2>Voir Plus</h2>
                </button>
              </div>
    )
}
export default MostLoyalCustomers ;