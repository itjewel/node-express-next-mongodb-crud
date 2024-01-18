// api.ts
export interface LoginData {
    username: string;
    password: string;
  }

const apiUrl = 'http://localhost:5000/api/users'; // Replace with your actual API base URL

export const employeeLoginApi = async (data: LoginData) => {
    const endpoint = `${apiUrl}/login-employee`; // Replace with your actual supervisor login endpoint
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message };
    }
  };

export const supervisorLoginApi = async (data: LoginData) => {
  const endpoint = `${apiUrl}/login-supervisor`; // Replace with your actual supervisor login endpoint
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { success: true };
  } else {
    const errorData = await response.json();
    return { success: false, error: errorData.message };
  }
};

export const administratorLoginApi = async (data: LoginData) => {
  const endpoint = `${apiUrl}/login-administrator`; // Replace with your actual administrator login endpoint
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { success: true };
  } else {
    const errorData = await response.json();
    return { success: false, error: errorData.message };
  }
};
