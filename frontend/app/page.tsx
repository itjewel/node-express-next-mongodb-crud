'use client'
// ./app/page.tsx

import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectToken,selectRoles  } from "@/redux/features/auth/authSlice";
/* use client */
const Page: React.FC = () => {

  const checkToken = useSelector(selectToken);
  const checkRoles = useSelector(selectRoles);
  console.log({checkToken, checkRoles});

  return (
    <div>
      <h1>Hi there</h1>
      {/* Render your component content using todosData and productsData */}
    </div>
  );
};

export default Page;
