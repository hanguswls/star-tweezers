import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useCurrentPath() {
  const loacation = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setPath();
  }, [loacation]);

  const setPath = useCallback(() => {
    const path = loacation.pathname.split('/')[1];
    setCurrentPath(path);
  });

  return { currentPath };
}

export default useCurrentPath;