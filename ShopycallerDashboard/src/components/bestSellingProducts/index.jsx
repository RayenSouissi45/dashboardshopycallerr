import ColoredRectangle from "../coloredRectangle";
import ProductCart from "../productCart";
import product1 from "../../pictures/products/product1.png"
import product2 from "../../pictures/products/product2.png"
import product3 from "../../pictures/products/product3.png"
import product4 from "../../pictures/products/product4.png"




function BestSellingProducts() {
  const ProductTable = [
    { name: "SVR SUN SECURE CREME SPF 50+", prix: "300", state: "active", picture : product1 },
    { name: "Uriage GYN-8 Toilette Intime", prix: "140", state: "active", picture : product2  },
    { name: "Uriage Bariésun Mat Fluide SPF50+", prix: "200", state: "active", picture : product3 },
    { name: "DEMARCARE CICATREAT CREME", prix: "370", state: "active", picture : product4 }
  ];

  return (
    <div className="h-[637px] ml-6 bg-white rounded-lg flex-grow pb-8 w-[340px]">
      <div className="flex flex-row items-center space-x-3 py-8 px-2 bg-white h-20 mx-8">
        <ColoredRectangle color="bg-red-200" />
        <b>
          <h5 className="text-lg">Les Produits Les Plus Vendus</h5>
        </b>
      </div>
      <div className="flex flex-row items-center space-x-48 px-8 bg-white mx-1 text-gray-500">
        <b>Produits</b>
        <b>Gains</b>
      </div>
      <div className="border-b ml-6 mr-6 mt-6 bg-yellow-300" />
      
        {ProductTable.slice(0, 4).map((item, index) => (
          <div key={index}>
            <ProductCart ProductItem={item} />
          </div>
        ))}
        
      <button className="bg-white w-80 mx-auto hover:bg-gray-50 mt-12 text-gray-800 font-bold py-2 px-4 flex flex-row border rounded-xl">
        <h2 className="mx-auto">Tous Les Produits</h2>
      </button>
    </div>
  );
}

export default BestSellingProducts;
