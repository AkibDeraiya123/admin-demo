import SignIn from "@/pages/Authentication/SignIn";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import SelfAssessment from "@/pages/self-assessment";
import SurveyPage from "@/pages/survey";


export const publicRoutes = [
  { path: "/auth/login", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: '/self-assessment', element: <SelfAssessment/>},
  { path: '/survey', element: <SurveyPage />}

];

export const privateRoutes = [

];
