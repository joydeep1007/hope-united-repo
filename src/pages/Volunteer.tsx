import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, BookOpen, TreePine } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const voluntewerAreas = [
    { icon: Heart, title: "Healthcare Support", description: "Help provide medical care and wellness programs" },
    { icon: BookOpen, title: "Education", description: "Teach and mentor children and adults" },
    { icon: TreePine, title: "Environmental", description: "Conservation and sustainability projects" },
    { icon: Users, title: "Community Outreach", description: "Connect with and support local communities" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of the change you want to see in the world. Every volunteer makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Volunteer Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {voluntewerAreas.map((area, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <area.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-sm">{area.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">{area.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare Support</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="environment">Environmental</SelectItem>
                        <SelectItem value="community">Community Outreach</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                        <SelectItem value="events">Event Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your motivation or any special skills"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;