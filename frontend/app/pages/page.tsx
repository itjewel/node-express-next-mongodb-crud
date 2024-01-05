// pages/index.js
import React, { useEffect } from 'react';
import { useGetTodosQuery } from '@/redux/features/todos/todosSlice';
import { useGetProductByNameQuery } from '@/redux/features/products/productsSlice';

const HomePage = () => {
  const { data: todosData } = useGetTodosQuery('');
  
  // Assuming useGetProductByNameQuery requires a product name parameter
  const { data: productsData } = useGetProductByNameQuery('');

  useEffect(() => {
    // Your component logic using the fetched data
    console.log('Todos:', todosData);
    console.log('Products:', productsData);
  }, [todosData, productsData]);

  return (
    <div>
      {/* Render your component content using todosData and productsData */}
    </div>
  );
};

export default HomePage;
