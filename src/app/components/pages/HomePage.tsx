import { ArrowRight, CircleCheck, Shield, TrendingUp, Users, Zap, Clock, Globe, Award, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <span className="text-sm">Trusted by Growing Enterprises Globally</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Transforming HR Operations into Strategic Growth Engines
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Enterprise-grade Application Management Services and HR Advisory that turn your HR technology investments into measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Talk to an HR Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate('services')}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl mb-1">500+</div>
                  <div className="text-sm text-slate-400">Support Tickets Resolved Monthly</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">99.8%</div>
                  <div className="text-sm text-slate-400">System Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Dedicated Support</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">50K+</div>
                  <div className="text-sm text-slate-400">Users Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Problems We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We address the critical gaps between HR technology implementation and business value realization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Overwhelmed HR Teams",
                description: "Your HR team spends more time troubleshooting systems than developing people strategy.",
                impact: "We handle L1-L3 support so your team can focus on strategic initiatives."
              },
              {
                title: "Underutilized HR Technology",
                description: "You've invested in platforms like Darwinbox, but adoption and ROI remain below expectations.",
                impact: "We optimize configuration, drive adoption, and measure tangible business outcomes."
              },
              {
                title: "Compliance & Audit Risks",
                description: "Keeping up with labor laws, tax regulations, and audit requirements is complex and resource-intensive.",
                impact: "We ensure continuous compliance with built-in governance and proactive monitoring."
              },
              {
                title: "Fragmented Support Experience",
                description: "Multiple vendors, inconsistent responses, and no single point of accountability.",
                impact: "One dedicated partner for all your HR technology and process needs."
              },
              {
                title: "Scaling Challenges",
                description: "Growing headcount and expanding geographies strain your existing HR infrastructure.",
                impact: "Scalable support models that grow with your business without proportional cost increases."
              },
              {
                title: "Lack of Strategic HR Guidance",
                description: "You need more than technical support—you need strategic HR expertise.",
                impact: "Continuous advisory to align HR operations with business growth objectives."
              }
            ].map((problem, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{problem.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end support for your HR technology ecosystem and strategic HR operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AMS Card */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl mb-4">Application Management Services (AMS)</h3>
                <p className="text-muted-foreground mb-6">
                  Dedicated L1–L3 support for your HR technology platforms, ensuring maximum uptime, optimal performance, and seamless user experience.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    "24/7 Technical Support & Incident Management",
                    "Payroll Processing & Leave Management",
                    "System Configuration & Change Management",
                    "Proactive Health Monitoring & Optimization",
                    "Compliance & Audit Readiness",
                    "User Training & Adoption Support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => onNavigate('services')} variant="outline" className="w-full">
                  Learn More About AMS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* HR Advisory Card */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl mb-4">HR Advisory Services</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic consulting to optimize your HR processes, improve adoption, and drive measurable ROI from your HR technology investments.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    "HR Process Design & Optimization",
                    "Policy Development & Compliance Audits",
                    "Change Management & Adoption Strategy",
                    "Technology ROI Assessment & Improvement",
                    "Strategic HR Planning & Roadmaps",
                    "Best Practices Implementation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => onNavigate('services')} variant="outline" className="w-full">
                  Learn More About Advisory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why HuPulse Global */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why HuPulse Global</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're not just a vendor—we're your strategic partner in HR transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compliance-First Approach",
                description: "Built-in governance frameworks ensuring continuous adherence to labor laws, tax regulations, and audit requirements across all supported geographies."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dedicated Account Management",
                description: "Named account managers who understand your business, not just ticket queues. Proactive relationship management focused on your success."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Measurable ROI Focus",
                description: "Every engagement includes defined KPIs, regular reporting, and continuous optimization to ensure tangible business value."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Predictable Subscription Model",
                description: "Transparent, flat-fee pricing with no surprise costs. Scale support up or down as your business needs evolve."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Scalability",
                description: "Support models designed for multi-country operations with localized expertise and 24/7 coverage across time zones."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Deep Platform Expertise",
                description: "Certified specialists in leading HR platforms including Darwinbox, with extensive experience in enterprise implementations."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Real Business Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes our clients achieve with HuPulse Global
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "40%",
                impact: "Reduction in HR Operational Costs",
                description: "Mid-sized tech company reduced HR ops costs by shifting from multiple vendors to our unified AMS model"
              },
              {
                metric: "3x",
                impact: "Faster Incident Resolution",
                description: "Manufacturing enterprise achieved 3x faster ticket resolution with our L1-L3 tiered support structure"
              },
              {
                metric: "95%",
                impact: "Platform Adoption Rate",
                description: "Retail organization improved HRIS adoption from 60% to 95% through our advisory and change management"
              },
              {
                metric: "100%",
                impact: "Compliance Audit Pass Rate",
                description: "Financial services client achieved perfect compliance audit scores with our proactive governance framework"
              },
              {
                metric: "60%",
                impact: "Reduction in HR Admin Time",
                description: "Healthcare provider freed up 60% of HR team capacity to focus on strategic talent initiatives"
              },
              {
                metric: "24hr",
                impact: "Average Response Time for Critical Issues",
                description: "Global enterprise maintains business continuity with our guaranteed 24-hour critical incident resolution"
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="text-4xl text-blue-600 mb-2">{item.metric}</div>
                  <h4 className="mb-3">{item.impact}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our HR experts to discuss your specific challenges and how we can help drive measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('pricing')}
              className="border-white text-white hover:bg-white/10"
            >
              View Pricing Options
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section className="py-12 bg-slate-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">
            TRUSTED BY LEADING ENTERPRISES ACROSS INDUSTRIES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Technology', 'Manufacturing', 'Retail', 'BFSI', 'Healthcare', 'SaaS'].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-slate-600">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}