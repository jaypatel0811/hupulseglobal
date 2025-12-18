import { Check, ArrowRight, Star, Building2, Globe, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const pricingTiers = [
    {
      name: "Silver",
      tagline: "Essential Support",
      icon: <Building2 className="w-8 h-8" />,
      color: "slate",
      priceRange: "$2,500 - $5,000/month",
      pricingModel: "Flat fee or PUPM",
      idealFor: "Growing companies (100-500 employees)",
      description: "Core AMS support with essential HR advisory to ensure smooth operations and compliance.",
      amsHours: "40 hours/month",
      advisoryDepth: "Basic process optimization",
      accountManagement: "Shared Account Manager",
      features: [
        "L1-L2 support during business hours",
        "Monthly payroll processing support",
        "Incident & ticket management",
        "Quarterly system health checks",
        "Standard compliance monitoring",
        "Email & portal support",
        "Monthly performance reports",
        "Basic user training resources"
      ],
      limitations: [
        "Limited to single platform support",
        "Business hours support only (9-5 local time)",
        "48-hour response time for non-critical issues"
      ]
    },
    {
      name: "Gold",
      tagline: "Comprehensive Excellence",
      icon: <Star className="w-8 h-8" />,
      color: "amber",
      priceRange: "$6,000 - $12,000/month",
      pricingModel: "Flat fee or FTE-based",
      idealFor: "Mid-market enterprises (500-2,000 employees)",
      description: "Full-spectrum AMS with strategic HR advisory to drive optimization and measurable ROI.",
      amsHours: "80 hours/month",
      advisoryDepth: "Strategic process redesign",
      accountManagement: "Dedicated Account Manager",
      popular: true,
      features: [
        "L1-L3 support with extended hours (7am-7pm)",
        "Comprehensive payroll & leave management",
        "Proactive system monitoring & optimization",
        "Monthly health checks & QBRs",
        "Enhanced compliance & audit support",
        "Phone, email & dedicated Slack channel",
        "Bi-weekly performance & adoption reports",
        "Customized training programs",
        "Change management support",
        "ROI assessment & improvement planning",
        "Multi-platform support (up to 3 systems)",
        "4-hour response for critical issues"
      ]
    },
    {
      name: "Platinum",
      tagline: "Enterprise Partnership",
      icon: <Sparkles className="w-8 h-8" />,
      color: "purple",
      priceRange: "$15,000+/month",
      pricingModel: "Customized engagement",
      idealFor: "Large enterprises (2,000+ employees) & multi-country operations",
      description: "White-glove service with embedded advisory partnership for enterprise-wide HR transformation.",
      amsHours: "Unlimited support hours",
      advisoryDepth: "Full transformation programs",
      accountManagement: "Named Executive Sponsor + Dedicated Team",
      features: [
        "24/7 L1-L3 global support coverage",
        "Multi-country payroll & compliance management",
        "Real-time monitoring with predictive analytics",
        "Weekly strategic reviews & monthly QBRs",
        "Full compliance governance & audit readiness",
        "Dedicated support team + Slack/Teams integration",
        "Real-time dashboards & custom reporting",
        "Enterprise-wide training & certification programs",
        "Multi-year transformation roadmap",
        "Executive advisory & strategic HR planning",
        "Unlimited platform coverage",
        "1-hour response for critical issues",
        "Annual on-site strategic planning sessions",
        "Priority access to innovation pilots"
      ]
    }
  ];

  const colorStyles = {
    slate: {
      headerBg: 'bg-slate-100',
      headerText: 'text-slate-700',
      borderColor: 'border-slate-300',
      badgeBg: 'bg-slate-600'
    },
    amber: {
      headerBg: 'bg-amber-100',
      headerText: 'text-amber-700',
      borderColor: 'border-amber-400',
      badgeBg: 'bg-amber-600'
    },
    purple: {
      headerBg: 'bg-purple-100',
      headerText: 'text-purple-700',
      borderColor: 'border-purple-400',
      badgeBg: 'bg-purple-600'
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Transparent, Value-Driven Pricing</h1>
            <p className="text-xl text-slate-300">
              Choose the service tier that aligns with your organization's size, complexity, and growth ambitions. Every package delivers measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-6">Our Pricing Philosophy</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-lg mb-4">
                We believe in predictable, transparent pricing that aligns our success with yours. No hidden fees, no surprise charges—just clear value for a defined investment.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {[
                  {
                    title: "Flat Fee",
                    description: "Fixed monthly cost for defined scope and support hours"
                  },
                  {
                    title: "PUPM (Per User Per Month)",
                    description: "Scalable pricing based on active employee count"
                  },
                  {
                    title: "FTE-Based",
                    description: "Dedicated team resources for enterprise engagements"
                  }
                ].map((model, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <h4 className="mb-2">{model.title}</h4>
                    <p className="text-sm text-muted-foreground">{model.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const colors = colorStyles[tier.color as keyof typeof colorStyles];
              
              return (
                <Card 
                  key={index} 
                  className={`relative ${tier.popular ? 'border-4 border-amber-400 shadow-2xl scale-105' : 'border-2'} ${colors.borderColor}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className={`${colors.headerBg} p-8`}>
                    <div className={`w-16 h-16 ${colors.headerBg} border-2 ${colors.borderColor} rounded-lg flex items-center justify-center mb-4 ${colors.headerText}`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl mb-2">{tier.name}</h3>
                    <p className={`text-sm ${colors.headerText} mb-4`}>{tier.tagline}</p>
                    <div className="text-3xl mb-2">{tier.priceRange}</div>
                    <p className="text-sm text-muted-foreground">{tier.pricingModel}</p>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-3">
                        {tier.idealFor}
                      </div>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-slate-50 rounded-lg p-4 mb-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">AMS Hours:</span>
                        <span>{tier.amsHours}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Advisory:</span>
                        <span>{tier.advisoryDepth}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Management:</span>
                        <span>{tier.accountManagement}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations (if any) */}
                    {tier.limitations && (
                      <div className="mb-6 pb-6 border-t border-border pt-6">
                        <h4 className="mb-3 text-sm text-muted-foreground">Limitations</h4>
                        <ul className="space-y-2">
                          {tier.limitations.map((limitation, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button 
                      onClick={() => onNavigate('contact')} 
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons & Customization */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Add-Ons & Customization</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your package with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Additional Platform Support",
                price: "+$1,500/month per platform",
                description: "Extend AMS coverage to additional HR technology platforms beyond the included tier allocation"
              },
              {
                title: "Extended Support Hours",
                price: "+$2,000/month",
                description: "Upgrade to 24/7 support coverage across all time zones"
              },
              {
                title: "Dedicated Advisory Hours",
                price: "$250/hour",
                description: "On-demand advisory hours for specific projects or strategic initiatives"
              },
              {
                title: "Implementation Services",
                price: "Project-based pricing",
                description: "New platform implementation, migration, or major upgrade projects"
              },
              {
                title: "Custom Integration Development",
                price: "Project-based pricing",
                description: "Bespoke integrations between HR systems and third-party applications"
              },
              {
                title: "Advanced Analytics & BI",
                price: "+$3,000/month",
                description: "Custom dashboards, predictive analytics, and executive reporting"
              }
            ].map((addon, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="mb-2">{addon.title}</h4>
                  <div className="text-lg text-blue-600 mb-3">{addon.price}</div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-600 bg-blue-50">
            <CardContent className="p-8 text-center">
              <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl mb-4">Calculate Your Potential ROI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our typical clients see 3-5x ROI within the first year through operational efficiency gains, reduced HR technology costs, and improved compliance.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { metric: "40%", label: "Average cost reduction" },
                  { metric: "60%", label: "HR team capacity freed" },
                  { metric: "3x", label: "Faster issue resolution" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="text-3xl text-blue-600 mb-2">{stat.metric}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button onClick={() => onNavigate('contact')} size="lg">
                Request a Custom ROI Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Pricing Disclaimer:</strong> Pricing varies based on organization size, complexity, number of supported platforms, geographic coverage requirements, and specific service scope. The ranges above represent typical engagements. Contact us for a customized quote tailored to your specific needs.
          </p>
        </div>
      </section>
    </div>
  );
}
