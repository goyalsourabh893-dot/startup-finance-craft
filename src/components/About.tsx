import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary bg-primary/10">
                Expert Advisory
              </Badge>
              <h2 className="text-4xl font-bold text-foreground">
                Trusted Financial Partner for Growing Startups
              </h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience in startup finance and having worked with 
                companies from pre-seed to IPO, we understand the unique challenges growing 
                businesses face at every stage.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Deep Startup Experience</h4>
                  <p className="text-muted-foreground">Former CFO at 3 successful startups, including 2 exits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-muted-foreground">Helped raise over $50M in funding across various stages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Industry Expertise</h4>
                  <p className="text-muted-foreground">Specialized in SaaS, FinTech, and B2B technology companies</p>
                </div>
              </div>
            </div>
            
            <Button variant="cta" size="lg">
              Schedule a Meeting
            </Button>
          </div>
          
          {/* Right Content - Stats & Achievements */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card border">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-card border">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">150+</div>
                    <div className="text-sm text-muted-foreground">Companies Advised</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-xl shadow-elegant border">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Strategic thinking with tactical execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Data-driven decision making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Long-term partnership mindset</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Credentials & Education</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• MBA Finance, Wharton School</p>
                <p>• CPA, Certified Public Accountant</p>
                <p>• Series 7 & 63 Licensed</p>
                <p>• Former Investment Banking, Goldman Sachs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;