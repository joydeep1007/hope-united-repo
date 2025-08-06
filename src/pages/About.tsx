import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "HopeUnited was founded with a vision to create lasting change in underserved communities.",
    },
    {
      year: "2019",
      title: "First Program Launch",
      description: "Launched our healthcare support program, providing medical assistance to rural areas.",
    },
    {
      year: "2020",
      title: "Education Initiative",
      description: "Started educational programs reaching over 1,000 children in remote locations.",
    },
    {
      year: "2021",
      title: "Environmental Focus",
      description: "Expanded into environmental conservation with tree planting and clean water projects.",
    },
    {
      year: "2022",
      title: "Community Centers",
      description: "Established 5 community centers providing ongoing support and resources.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received international recognition for our sustainable development efforts.",
    },
    {
      year: "2024",
      title: "Technology Integration",
      description: "Integrated technology solutions to better track impact and reach more communities.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in empowering local communities to lead their own transformation.",
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "Our programs are designed to create lasting change that continues beyond our involvement.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We maintain open communication about our work, impact, and financial stewardship.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "While we work locally, we think globally about solutions to humanitarian challenges.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2018, HopeUnited has been dedicated to creating positive change in communities around the world. 
              We believe that every person deserves access to healthcare, education, and a healthy environment.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  To empower underserved communities through sustainable healthcare, education, and environmental programs 
                  that create lasting positive change. We work hand-in-hand with local leaders to build capacity and 
                  ensure our impact continues long after our programs are established.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-lg px-4 py-2 font-bold">
                        {milestone.year}
                      </Badge>
                    </div>
                    <Card className="flex-grow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Lives Improved</div>
                </CardContent>
              </Card>
              <Card className="border-secondary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Active Volunteers</div>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">25</div>
                  <div className="text-muted-foreground">Communities Served</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Countries Reached</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;