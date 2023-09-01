import loadable from "@loadable/component";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "../components/Loading";

const SignIn = loadable(() => import("./SignIn"), {
  fallback: <Loading height="100%" />,
});

const Root = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/signin" component={SignIn} />
        {/* <Route path="/signup" component={SignUp} /> */}

        <Route path="/" element={<Navigate to="/app" replace />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default Root;
