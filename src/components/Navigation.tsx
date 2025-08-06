import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInDown, staggerContainer, staggerItem } from "@/lib/motion";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-between items-center h-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={staggerItem}>
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-trust-blue to-hope-green rounded-full"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="text-xl font-bold text-foreground"
                whileHover={{ color: "#007acc" }}
                transition={{ duration: 0.2 }}
              >
                HopeUnited
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={staggerItem}>
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive("/") ? "text-primary" : "text-foreground/70"
                )}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.span>
                {isActive("/") && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link
                to="/volunteer"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive("/volunteer") ? "text-primary" : "text-foreground/70"
                )}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Volunteer
                </motion.span>
                {isActive("/volunteer") && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link
                to="/about"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive("/about") ? "text-primary" : "text-foreground/70"
                )}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  About Us
                </motion.span>
                {isActive("/about") && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:hidden"
            variants={staggerItem}
          >
            <motion.button 
              className="text-foreground/70 hover:text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;