import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Biipe design reminder: public-facing landing page plus a focused /cadastro flow with the same light editorial system.
function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/cadastro" component={Signup} /><Route path="/login" component={Login} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
