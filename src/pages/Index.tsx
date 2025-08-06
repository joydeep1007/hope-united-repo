import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, TreePine, Award, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ngo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-text-dark/80 to-text-dark/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Hope,
            <br />
            <span className="bg-gradient-to-r from-trust-blue to-hope-green bg-clip-text text-transparent">
              Changing Lives
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in creating sustainable change through community-driven programs 
            that empower healthcare, education, and environmental stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hope-green hover:bg-hope-green/90 text-white" asChild>
              <Link to="/volunteer">
                Become a Volunteer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-text-dark" asChild>
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary">Our Mission</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Communities for Lasting Change
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that sustainable development comes from within communities. Our role is to provide 
              resources, support, and expertise while empowering local leaders to drive their own transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Healthcare Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Providing essential medical care and health education to underserved communities, 
                  ensuring everyone has access to quality healthcare services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-secondary/10 rounded-full w-fit mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Education Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Building educational opportunities for children and adults through schools, 
                  literacy programs, and skill development initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-full w-fit mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Environmental Stewardship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Promoting sustainable practices through conservation projects, 
                  clean energy initiatives, and environmental education programs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary">Our Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Measuring Success Through Lives Changed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every number represents a real person whose life has been positively impacted by our collective efforts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground font-medium">Lives Improved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">25</div>
              <div className="text-muted-foreground font-medium">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground font-medium">Countries</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Recent Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Completed 3 new healthcare centers in rural communities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Trained 200+ local healthcare workers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Launched education programs reaching 2,000+ children</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Planted 50,000+ trees in reforestation projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-secondary" />
                  <CardTitle className="text-2xl">Recognition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>UN Sustainable Development Goals Partner</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>2023 Global Health Initiative Award</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Community Choice Award for Environmental Impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Featured in UNESCO Education Report 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of changemakers and help us build a better world, one community at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/volunteer">
                Start Volunteering Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
