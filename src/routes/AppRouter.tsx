import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../presentation/layouts/Layout";
import { Menu } from "../presentation/views/Menu";
import { SendEmail } from "../presentation/views/SendEmail";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Menu/>},
            {path: "/envio-correos", element: <SendEmail/>},
        ]
    }
])

