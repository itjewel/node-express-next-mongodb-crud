'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useCheckAuthQuery  } from "@/redux/features/auth/apiSlice";
import { selectToken,selectRoles  } from "@/redux/features/auth/authSlice";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

const Users = () => {
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
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Users" />
        <div className="flex justify-end">
  <Link
    className="inline-flex items-center gap-2.5 bg-meta-3 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    href="/admin/users/add-user"
  >
    <span>
      <svg
        className="fill-current"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.66663C9.06991 1.66663 8.33333 2.40321 8.33333 3.33329V8.33329H3.33333C2.40324 8.33329 1.66667 9.06987 1.66667 10C1.66667 10.9301 2.40324 11.6666 3.33333 11.6666H8.33333V16.6666C8.33333 17.5967 9.06991 18.3333 10 18.3333C10.9301 18.3333 11.6667 17.5967 11.6667 16.6666V11.6666H16.6667C17.5968 11.6666 18.3333 10.9301 18.3333 10C18.3333 9.06987 17.5968 8.33329 16.6667 8.33329H11.6667V3.33329C11.6667 2.40321 10.9301 1.66663 10 1.66663ZM10 0C11.1046 0 12 0.895431 12 2.00001C12 3.1046 11.1046 4.00001 10 4.00001C8.89543 4.00001 8 3.1046 8 2.00001C8 0.895431 8.89543 0 10 0ZM15.5417 9.54001C15.4197 9.41794 15.2571 9.41794 15.1351 9.54001C15.0131 9.66208 15.0131 9.82464 15.1351 9.94671L17.1892 12.0001L15.1351 14.0542C15.0131 14.1763 15.0131 14.3389 15.1351 14.461C15.2571 14.5831 15.4197 14.5831 15.5417 14.461L17.5958 12.4069C17.7179 12.2849 17.7179 12.1223 17.5958 12.0002L15.5417 9.94671C15.4197 9.82464 15.4197 9.66208 15.5417 9.54001Z"
          fill=""
        />
      </svg>
    </span>
    Add User
  </Link>
</div>



        <div className="grid ">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5">
                    <div className="col-span-1 hidden items-center sm:flex">
                        <p className="font-medium">Id</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                        <p className="font-medium">Name</p>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex">
                        <p className="font-medium">Email</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                        <p className="font-medium">Username</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                        <p className="font-medium">Roles</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                        <p className="font-medium">Actions</p>
                    </div>
                </div>

                <div
                className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5" >
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                    12
                    </p>
                </div>
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                    Jewel
                    </p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">
                    jewel@g.com
                    </p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">jewelmia</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">Employee</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-meta-3">-</p>
                </div>
                </div>
                <div
                className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5" >
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                    12
                    </p>
                </div>
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                    Jewel
                    </p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">
                    jewel@g.com
                    </p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">jewelmia</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">Employee</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-meta-3">-</p>
                </div>
                </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Users