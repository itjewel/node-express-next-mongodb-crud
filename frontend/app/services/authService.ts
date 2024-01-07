// services/authService.ts
import {
    useEmployeeLoginMutation,
    useSupervisorLoginMutation,
    useAdministratorLoginMutation,
  } from '../api/auth/authApi';
  export const useEmployeeLogin = () => {
    // Ensure useEmployeeLoginMutation returns a function
    return useEmployeeLoginMutation().mutateAsync;
  };
  
  export const useSupervisorLogin = () => {
    // Ensure useSupervisorLoginMutation returns a function
    return useSupervisorLoginMutation().mutateAsync;
  };
  
  export const useAdministratorLogin = () => {
    // Ensure useAdministratorLoginMutation returns a function
    return useAdministratorLoginMutation().mutateAsync;
  };
  
  const useLoginMutation = (selectedRole: string) => {
    switch (selectedRole) {
      case 'employee':
        const employeeMutation = useEmployeeLogin();
        console.log('Employee mutation:', employeeMutation);
        return employeeMutation;
      case 'supervisor':
        const supervisorMutation = useSupervisorLogin();
        console.log('Supervisor mutation:', supervisorMutation);
        return supervisorMutation;
      case 'administrator':
        const adminMutation = useAdministratorLogin();
        console.log('Administrator mutation:', adminMutation);
        return adminMutation;
      default:
        throw new Error('Invalid role');
    }
  };
  

  const login = async (mutation: (username: string, password: string) => Promise<any>, username: string, password: string) => {
    try {
      const result = await mutation(username, password);
      // Continue with login logic, if needed
      return result;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  };
  
  export { useLoginMutation,login};
  