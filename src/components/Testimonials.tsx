import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "Series A - $15M Raised",
      content: "The financial modeling and fundraising support was game-changing. We raised our Series A 3 months ahead of schedule thanks to their expert guidance.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, DataSync",
      company: "Seed - $3M Raised", 
      content: "Their strategic finance expertise helped us optimize our unit economics and build a sustainable business model that investors loved.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Co-founder, HealthTech Pro",
      company: "Pre-Series A",
      content: "From day one, they understood our business and provided actionable insights. The financial planning has been crucial for our growth trajectory.",
      rating: 5,
      avatar: "EJ"
    },
    {
      name: "David Kim", 
      role: "CEO, FinanceAI",
      company: "Series B - $25M Raised",
      content: "Working with them through multiple funding rounds has been invaluable. Their deep understanding of startup finance is unmatched.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Founder, EcoCommerce",
      company: "Seed - $2M Raised",
      content: "The budget planning and cash flow management advice helped us extend our runway and achieve profitability faster than expected.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Thompson",
      role: "CEO, CloudOps",
      company: "Series A - $12M Raised",
      content: "Their investor relations support and board reporting templates have made our fundraising process incredibly smooth and professional.",
      rating: 5,
      avatar: "JT"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Successful Founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 150+ startups that have transformed their financial operations and 
            successfully raised funding with our expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Success Metrics */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Total Capital Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Funding Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
              <div className="text-muted-foreground">Avg. Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">18mo</div>
              <div className="text-muted-foreground">Avg. Runway Extension</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;