import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, staggerContainer, staggerItem } from "@/lib/motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
              className="text-foreground/70 hover:text-foreground p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 shadow-2xl z-50 md:hidden"
              style={{ backgroundColor: '#000000' }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full" style={{ backgroundColor: '#000000' }}>
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700" style={{ backgroundColor: '#000000' }}>
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-trust-blue to-hope-green rounded-full"></div>
                    <span className="text-lg font-bold text-white">HopeUnited</span>
                  </motion.div>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-300 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex-1 px-4 py-6" style={{ backgroundColor: '#000000' }}>
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div variants={staggerItem}>
                      <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className={cn(
                          "block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200",
                          isActive("/") 
                            ? "bg-hope-green text-white shadow-md" 
                            : "text-gray-200 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Home
                        </motion.span>
                      </Link>
                    </motion.div>
                    
                    <motion.div variants={staggerItem}>
                      <Link
                        to="/volunteer"
                        onClick={closeMobileMenu}
                        className={cn(
                          "block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200",
                          isActive("/volunteer") 
                            ? "bg-hope-green text-white shadow-md" 
                            : "text-gray-200 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Volunteer
                        </motion.span>
                      </Link>
                    </motion.div>
                    
                    <motion.div variants={staggerItem}>
                      <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className={cn(
                          "block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200",
                          isActive("/about") 
                            ? "bg-hope-green text-white shadow-md" 
                            : "text-gray-200 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          About Us
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </nav>

                {/* Mobile Menu Footer */}
                <motion.div 
                  className="p-4 border-t border-gray-700"
                  style={{ backgroundColor: '#000000' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-gray-400 text-center">
                    Building Hope, Changing Lives
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;