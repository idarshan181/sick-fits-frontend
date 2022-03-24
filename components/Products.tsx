import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

interface ProductsInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  photo: {
    id: string;
    image: {
      publicUrlTransformed: string;
    };
  };
}

interface ProductsData {
  allProducts: ProductsInterface[];
}

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
export default function Products() {
  const { loading, data, error } = useQuery<ProductsData>(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>Products Component!!</p>
    </div>
  );
}
