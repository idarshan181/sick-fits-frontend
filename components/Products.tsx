import Image from 'next/image';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

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

const ProductsList = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { loading, data, error } = useQuery<ProductsData>(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message} </p>;
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product: ProductsInterface) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}
