import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-trust-blue to-hope-green rounded-full"></div>
            <span className="text-xl font-bold text-foreground">HopeUnited</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-foreground/70"
              )}
            >
              Home
            </Link>
            <Link
              to="/volunteer"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/volunteer") ? "text-primary" : "text-foreground/70"
              )}
            >
              Volunteer
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/about") ? "text-primary" : "text-foreground/70"
              )}
            >
              About Us
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-foreground/70 hover:text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;