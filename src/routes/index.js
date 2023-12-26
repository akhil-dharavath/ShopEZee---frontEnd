import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

// Convert baseRoutes to a React function component
function BaseRoutes() {
  const routing = useRoutes([LoginRoutes, MainRoutes]);
  return routing;
}

export default BaseRoutes;
