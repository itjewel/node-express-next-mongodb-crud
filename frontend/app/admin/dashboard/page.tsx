'use client'
import { useCheckAuthQuery  } from "@/redux/features/auth/apiSlice";
import { selectToken,selectRoles  } from "@/redux/features/auth/authSlice";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Dashboard = () => {
const router = useRouter();
const authState = useSelector((state: RootState) => state);
const checkToken: string | undefined  = selectToken(authState);
const tokenToUse = checkToken || 'defaultToken';
  // const checkRoles = selectRoles(authState);

const { data: authData, isError, isLoading: loadingData } = useCheckAuthQuery(tokenToUse);

useEffect(() => {
  if ( !authData && isError) {
    router.push('/login');
  }
}, [ authData, isError,router]);


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard