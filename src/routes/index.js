import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

export default function baseRoutes() {
  return useRoutes([LoginRoutes, MainRoutes]);
}