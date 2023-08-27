import {DEFAULT_URL} from "../const.ts";

export const refreshAccessToken = async (refresh: string) => {
  try {
    const response = await fetch(`${DEFAULT_URL}/users/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({refresh})
    });
    if (response.ok) {
      const data = await response.json();
      return data.access;
    } else {
      throw new Error('Failed to refresh access token');
    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
  }
};