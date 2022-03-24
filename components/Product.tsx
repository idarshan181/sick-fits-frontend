/* eslint-disable @next/next/no-img-element */
import formatMoney from '@libs/formatMoney';
import { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import ItemStyle from '@styles/ItemStyle';
import PriceTag from '@styles/PriceTag';
import Title from '@styles/Title';

type ProductType = {
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
};

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const { id, name, description, price, photo } = product;
  return (
    <ItemStyle>
      <img src={photo.image.publicUrlTransformed} alt={name} />
      <Title>
        <Link href={`/product/${id}`}>{name}</Link>
      </Title>
      <PriceTag>Price: {formatMoney(price)}</PriceTag>
      <p>{description}</p>
    </ItemStyle>
  );
}
