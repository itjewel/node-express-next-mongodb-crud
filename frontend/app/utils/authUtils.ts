// utils/authUtils.ts

export const determineRole = (username: string): string => {
    // Your logic to determine the role based on the username
    // For example:
    if (username.startsWith('supervisor')) {
      return 'supervisor';
    } else if (username.startsWith('administrator')) {
      return 'administrator';
    } else {
      return 'employee';
    }
  };
  