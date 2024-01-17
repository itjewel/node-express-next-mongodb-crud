'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useCheckAuthQuery  } from "@/redux/features/auth/apiSlice";
import { useCreatUserMutation } from "@/redux/features/users/usersSlice";
import { selectToken,selectRoles,setRoles,setToken  } from "@/redux/features/auth/authSlice";
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";


const Users = () => {
  const [createUser,{isLoading: createLoading}] = useCreatUserMutation();
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

const handleCreateUser = async (req: []) => {
  try {
    const response =  await createUser(req);
    console.log(response)
    if ('data' in response) {
      const { message } = response.data;
     // console.log(message)
    }
 
    // Handle successful login (actions dispatched by RTK Query)
  } catch (error) {
    // Handle login error
  }
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const userData = {
    name: e.target.name.value,
    username: e.target.username.value,
    password: e.target.password.value,
    email: e.target.email.value,
    role: e.target.role.value,
  };
  handleCreateUser(userData);
};


return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Add user" />
        <div className="flex justify-end">
  <Link
    className="inline-flex items-center gap-2.5 bg-meta-3 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    href="/admin/users"
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
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.333c-2.966 0-5.778-.824-8.194-2.258.048-.241.13-.482.24-.721.369-.877.972-1.67 1.71-2.335 1.082-1.086 2.422-1.876 3.88-2.334 1.458.458 2.798 1.248 3.88 2.334.738.665 1.34 1.458 1.71 2.335.11.24.192.48.24.721-2.416 1.434-5.228 2.258-8.194 2.258zm0-15.834c-1.717 0-3.333.508-4.667 1.383a8.226 8.226 0 0 0-.642.544c.306.232.637.472.995.719 1.12.743 2.433 1.558 3.877 2.29 1.443-.732 2.756-1.547 3.877-2.29.358-.247.69-.487.996-.72a8.226 8.226 0 0 0-.642-.543C13.333 2.007 11.717 1.5 10 1.5zm0 3.5c1.847 0 3.333 1.486 3.333 3.333s-1.486 3.333-3.333 3.333-3.333-1.486-3.333-3.333S8.153 5 10 5z"
            fill=""
        />
        </svg>

    </span>
     Users
  </Link>
</div>



        <div className="grid ">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
             
            <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <div className="p-6.5">


              <div className="mb-4.5">
                 <label className="mb-2.5 block text-black dark:text-white">
                            Full Name <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your fullname"
                            name="name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />                  
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">                    
                        <label className="mb-2.5 block text-black dark:text-white">
                            Username
                        </label>
                        <input name="username"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>

                    <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Password <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password" name="password"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address" name="email"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>

                    <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                        Choose Roles
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select name="role" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <option value="employee">Employee</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="administrator">Administrator</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.8">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                            ></path>
                            </g>
                        </svg>
                        </span>
                    </div>                       
                    </div>

                    
               </div>

              
               

               
                <div className="flex justify-end">
                <button className="flex  justify-center rounded bg-primary p-3 font-medium text-gray">
                  Save Information
                </button>
                </div>
              </div>
            </form>




               
                
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Users