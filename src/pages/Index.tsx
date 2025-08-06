import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, TreePine, Award, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ngo.jpg";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, staggerContainer, staggerItem, scaleIn, hoverScale, hoverLift } from "@/lib/motion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            y: scrollY * 0.5 
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-text-dark/80 to-text-dark/40"></div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-hope-green/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-trust-blue/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-3 h-3 bg-hope-green/40 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Building Hope,
            <br />
            <motion.span 
              className="bg-gradient-to-r from-trust-blue to-hope-green bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Changing Lives
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Join us in creating sustainable change through community-driven programs 
            that empower healthcare, education, and environmental stewardship.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-hope-green hover:bg-hope-green/90 text-white" asChild>
                <Link to="/volunteer">
                  Become a Volunteer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-text-dark backdrop-blur-sm" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section 
        className="py-20 bg-soft-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="outline" className="mb-4 text-primary border-primary">Our Mission</Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering Communities for Lasting Change
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We believe that sustainable development comes from within communities. Our role is to provide 
              resources, support, and expertise while empowering local leaders to drive their own transformation.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              variants={staggerItem}
              whileHover={hoverLift}
              className="transition-shadow duration-300"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-full w-fit mb-4"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Heart className="w-8 h-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl">Healthcare Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Providing essential medical care and health education to underserved communities, 
                    ensuring everyone has access to quality healthcare services.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={hoverLift}
              className="transition-shadow duration-300"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="p-3 bg-secondary/10 rounded-full w-fit mb-4"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Users className="w-8 h-8 text-secondary" />
                  </motion.div>
                  <CardTitle className="text-xl">Education Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Building educational opportunities for children and adults through schools, 
                    literacy programs, and skill development initiatives.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={hoverLift}
              className="transition-shadow duration-300"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <motion.div 
                    className="p-3 bg-accent/10 rounded-full w-fit mb-4"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <TreePine className="w-8 h-8 text-accent" />
                  </motion.div>
                  <CardTitle className="text-xl">Environmental Stewardship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Promoting sustainable practices through conservation projects, 
                    clean energy initiatives, and environmental education programs.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="outline" className="mb-4 text-primary border-primary">Our Impact</Badge>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Measuring Success Through Lives Changed
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Every number represents a real person whose life has been positively impacted by our collective efforts.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
              >
                10,000+
              </motion.div>
              <div className="text-muted-foreground font-medium">Lives Improved</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-secondary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 }}
              >
                500+
              </motion.div>
              <div className="text-muted-foreground font-medium">Active Volunteers</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
              >
                25
              </motion.div>
              <div className="text-muted-foreground font-medium">Communities</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.8 }}
              >
                15
              </motion.div>
              <div className="text-muted-foreground font-medium">Countries</div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem} whileHover={hoverLift}>
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <CheckCircle className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Recent Achievements</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Completed 3 new healthcare centers in rural communities</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Trained 200+ local healthcare workers</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Launched education programs reaching 2,000+ children</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Planted 50,000+ trees in reforestation projects</span>
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={hoverLift}>
              <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                <CardHeader>
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Award className="w-8 h-8 text-secondary" />
                    <CardTitle className="text-2xl">Recognition</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>UN Sustainable Development Goals Partner</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>2023 Global Health Initiative Award</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Community Choice Award for Environmental Impact</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      variants={staggerItem}
                    >
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Featured in UNESCO Education Report 2024</span>
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            variants={fadeInUp}
          >
            Join our community of changemakers and help us build a better world, one community at a time.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/volunteer">
                  Start Volunteering Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
