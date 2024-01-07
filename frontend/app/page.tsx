'use client'
// ./app/page.tsx
import React, { useEffect } from 'react';
import { useGetTodosQuery } from '@/redux/features/todos/todosSlice';
import { useGetProductByNameQuery } from '@/redux/features/products/productsSlice';

/* use client */
const Page: React.FC = () => {
  const { data: todosData } = useGetTodosQuery('');
  const { data: productsData } = useGetProductByNameQuery('');

  useEffect(() => {
    // Your component logic using the fetched data
    console.log('Todos:', todosData);
    console.log('Products:', productsData);
  }, [todosData, productsData]);

  return (
    <div>
      <h1>Hi there</h1>
      {/* Render your component content using todosData and productsData */}
    </div>
  );
};

export default Page;
