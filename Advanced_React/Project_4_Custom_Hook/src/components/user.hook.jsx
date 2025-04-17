import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/current-user${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return user;
};
