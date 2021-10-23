import { useState } from "react";
import { useLocation } from "react-router"


export const useActive = (testUrl) => {
  const [url, setUrl] = useState(testUrl);
  const location = useLocation();
  const isActive = location.pathname?.split('/').at(-1) === url;
  return { isActive, setUrl };
}