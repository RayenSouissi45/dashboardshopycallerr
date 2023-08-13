import GlobalViewCommercialCart from "../globalViewCommercialCart/globalViewCommercialCart";

const CategoryProductsContainer = ({ items }) => {
  return (
    <div>
      {items.map((CategoryProductItem , index) => (
        <GlobalViewCommercialCart
          key={index}
          CategoryProductItem={CategoryProductItem}
        />
      ))}
    </div>
  );
};

export default CategoryProductsContainer;
