import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body"
import store from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Body/>,
      children : [
        {
          path : "/",
          element : <Maincontainer/>
        },
        {
          path : "/watch",
          element : <WatchPage/>
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
