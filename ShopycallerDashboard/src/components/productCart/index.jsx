function ProductCart({ ProductItem }) {
  return (
    <div className="flex flex-row mt-[22px] ml-6">
      {/* first product image */}
      <img
        className="mt-4 mr-4 w-16 h-16 rounded-full"
        src={ProductItem.picture}
        alt="Product"
      />


      <b className="pt-4">{ProductItem.name}</b>
      <div className="flex flex-col pt-2 pr-2 text-gray-500">
        <b className="ml-4">{ProductItem.prix} DT</b>
        <div className="bg-green-100 w-24 h-8 rounded-md text-green-400">
          <p className="mt-1 ml-2 pl-4">{ProductItem.state}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
