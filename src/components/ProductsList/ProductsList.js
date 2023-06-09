import { List } from './ProductsList.styled';

import ProductsListItem from './ProductsListItem';

const ProductsList = ({ productsArr, shopName }) => {
  return (
    <List>
      {productsArr.map(({ _id, ...props }) => (
        <ProductsListItem key={_id} {...props} shop={shopName} />
      ))}
    </List>
  );
};

export default ProductsList;
