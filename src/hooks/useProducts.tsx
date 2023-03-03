import React, {useEffect, useState} from 'react';
import storeDB from '../api/fakeStore';
import {Product, ProductsDb} from '../interfaces/shopInterface';

interface ProductInterface {
  product: Product[];
}

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState<Product>();

  const getProducts = async () => {
    try {
      const {data} = await storeDB.get<Product>('/products');
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log('Error : ', error);
      throw new Error('Error!! Please contact to you provider');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    isError,
    isLoading,
    products,
  };
};
