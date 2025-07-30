import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  PieChart, 
  Target, 
  TrendingUp, 
  DollarSign, 
  FileText,
  BarChart3,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Financial Modeling",
      description: "Comprehensive financial models for forecasting, scenario planning, and investor presentations.",
      features: ["3-5 Year Projections", "Scenario Analysis", "Unit Economics", "Sensitivity Models"]
    },
    {
      icon: DollarSign,
      title: "Fundraising Support",
      description: "End-to-end support for your fundraising journey from seed to Series A and beyond.",
      features: ["Pitch Deck Creation", "Investor Outreach", "Due Diligence Prep", "Term Sheet Review"]
    },
    {
      icon: PieChart,
      title: "Budget & Planning",
      description: "Strategic budgeting and financial planning to optimize cash flow and resource allocation.",
      features: ["Annual Budgets", "Cash Flow Management", "Resource Planning", "KPI Tracking"]
    },
    {
      icon: Target,
      title: "Strategic Advisory",
      description: "High-level strategic guidance on business decisions, partnerships, and growth initiatives.",
      features: ["Growth Strategy", "Market Analysis", "Partnership Evaluation", "Exit Planning"]
    },
    {
      icon: BarChart3,
      title: "Financial Operations",
      description: "Streamline your financial operations with robust processes and systems.",
      features: ["Process Optimization", "System Implementation", "Team Training", "Compliance Setup"]
    },
    {
      icon: FileText,
      title: "Investor Relations",
      description: "Maintain strong relationships with investors through regular reporting and communication.",
      features: ["Board Reporting", "Investor Updates", "Performance Metrics", "Stakeholder Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup to scale-up, we provide the financial expertise and strategic guidance 
            your growing business needs to succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every startup is unique. We offer tailored financial services and strategic consulting 
              to meet your specific needs and challenges.
            </p>
            <Button variant="cta" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;