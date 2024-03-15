import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import { SnackbarProvider } from "notistack";

// Convert baseRoutes to a React function component
function BaseRoutes() {
  const routing = useRoutes([LoginRoutes, MainRoutes]);
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={2000}
    >
      {routing}
    </SnackbarProvider>
  );
}

export default BaseRoutes;
