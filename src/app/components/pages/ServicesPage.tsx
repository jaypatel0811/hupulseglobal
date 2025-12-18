import { ArrowRight, CircleCheck, Zap, Target, Clock, Users, Shield, TrendingUp, Settings, CircleAlert, FileCheck, ChartBar, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive Application Management Services and strategic HR Advisory designed to maximize your HR technology ROI and drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ams" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="ams">Application Management</TabsTrigger>
              <TabsTrigger value="advisory">HR Advisory</TabsTrigger>
            </TabsList>

            {/* AMS Content */}
            <TabsContent value="ams" className="space-y-16">
              {/* AMS Overview */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">Application Management Services (AMS)</h2>
                <p className="text-xl text-muted-foreground">
                  End-to-end technical support and operational management for your HR technology platforms, ensuring maximum uptime, optimal performance, and seamless user experience across your entire organization.
                </p>
              </div>

              {/* L1-L3 Support Model */}
              <div>
                <h3 className="text-2xl text-center mb-8">Multi-Tier Support Model</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-2 border-green-600">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xl text-green-600">L1</span>
                      </div>
                      <h4 className="mb-3">Level 1 Support</h4>
                      <p className="text-sm text-muted-foreground mb-4">First-line user support and issue triage</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>User query resolution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Password resets & access issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Basic troubleshooting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Ticket documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>SLA: 4-hour response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-600">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xl text-blue-600">L2</span>
                      </div>
                      <h4 className="mb-3">Level 2 Support</h4>
                      <p className="text-sm text-muted-foreground mb-4">Advanced technical support and configuration</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Complex issue resolution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>System configuration changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Integration troubleshooting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Data integrity checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>SLA: 8-hour response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-600">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xl text-purple-600">L3</span>
                      </div>
                      <h4 className="mb-3">Level 3 Support</h4>
                      <p className="text-sm text-muted-foreground mb-4">Expert-level architecture and optimization</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Platform architecture design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Performance optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Custom development oversight</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Vendor escalation management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>SLA: 24-hour response</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Core AMS Services */}
              <div>
                <h3 className="text-2xl text-center mb-8">Core AMS Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Payroll Processing & Leave Management",
                      description: "End-to-end payroll execution, validation, and compliance checks across multiple countries and entities.",
                      features: [
                        "Monthly payroll cycle management",
                        "Leave accrual and processing",
                        "Tax and statutory compliance",
                        "Payroll reconciliation and reporting",
                        "Year-end processing and tax forms"
                      ]
                    },
                    {
                      icon: <CircleAlert className="w-6 h-6" />,
                      title: "Incident & Change Management",
                      description: "Structured ITIL-based processes for managing incidents, service requests, and platform changes.",
                      features: [
                        "24/7 incident response",
                        "Priority-based ticket routing",
                        "Change advisory board (CAB) governance",
                        "Release management",
                        "Root cause analysis and prevention"
                      ]
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "Proactive System Health Checks",
                      description: "Regular monitoring and optimization to prevent issues before they impact your business.",
                      features: [
                        "Daily system health monitoring",
                        "Weekly performance reports",
                        "Monthly optimization reviews",
                        "Quarterly business reviews (QBR)",
                        "Predictive issue detection"
                      ]
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Compliance Adherence",
                      description: "Continuous compliance monitoring across labor laws, tax regulations, and industry-specific requirements.",
                      features: [
                        "Multi-country labor law compliance",
                        "Tax regulation adherence",
                        "Audit trail maintenance",
                        "Regulatory change tracking",
                        "Compliance certification support"
                      ]
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Predictable Subscription Support",
                      description: "Transparent, flat-fee pricing with defined support hours and guaranteed response times.",
                      features: [
                        "Monthly support hour allocation",
                        "Rollover hour policies",
                        "Transparent utilization reporting",
                        "Flexible scaling options",
                        "No surprise billing"
                      ]
                    },
                    {
                      icon: <BookOpen className="w-6 h-6" />,
                      title: "User Training & Enablement",
                      description: "Comprehensive training programs to ensure your team can leverage the platform effectively.",
                      features: [
                        "New user onboarding",
                        "Role-based training modules",
                        "Admin certification programs",
                        "Knowledge base development",
                        "On-demand training resources"
                      ]
                    }
                  ].map((service, index) => (
                    <Card key={index} className="border-2 hover:border-blue-600 transition-all">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                          {service.icon}
                        </div>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* AMS CTA */}
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-8 text-center">
                <h3 className="text-2xl mb-4">Ready to optimize your HR technology operations?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Schedule a consultation to discuss your specific AMS requirements and how we can support your HR technology ecosystem.
                </p>
                <Button onClick={() => onNavigate('contact')} size="lg">
                  Schedule AMS Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>

            {/* HR Advisory Content */}
            <TabsContent value="advisory" className="space-y-16">
              {/* Advisory Overview */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">HR Advisory Services</h2>
                <p className="text-xl text-muted-foreground">
                  Strategic consulting to optimize your HR processes, improve technology adoption, and drive measurable ROI from your HR technology investments.
                </p>
              </div>

              {/* Advisory Services */}
              <div>
                <h3 className="text-2xl text-center mb-8">Strategic Advisory Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Lightbulb className="w-6 h-6" />,
                      title: "HR Process Optimization",
                      description: "Comprehensive analysis and redesign of core HR processes to eliminate inefficiencies and drive operational excellence.",
                      deliverables: [
                        "Current state process mapping",
                        "Gap analysis and recommendations",
                        "Future state process design",
                        "Implementation roadmap",
                        "Change management plan",
                        "Success metrics definition"
                      ]
                    },
                    {
                      icon: <FileCheck className="w-6 h-6" />,
                      title: "Policy Design & Audits",
                      description: "Development and review of HR policies to ensure compliance, consistency, and alignment with business objectives.",
                      deliverables: [
                        "Policy framework development",
                        "Compliance gap analysis",
                        "Multi-country policy harmonization",
                        "Employee handbook creation",
                        "Policy implementation support",
                        "Regular policy review cycles"
                      ]
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Change Management & Adoption",
                      description: "Structured programs to drive user adoption, minimize resistance, and ensure successful technology implementations.",
                      deliverables: [
                        "Stakeholder analysis and engagement",
                        "Communication strategy and materials",
                        "Training program design",
                        "Adoption metrics and tracking",
                        "Super-user network development",
                        "Post-launch support planning"
                      ]
                    },
                    {
                      icon: <ChartBar className="w-6 h-6" />,
                      title: "Technology ROI Assessment",
                      description: "Rigorous analysis of your HR technology investments to identify optimization opportunities and measure business impact.",
                      deliverables: [
                        "ROI baseline assessment",
                        "Utilization analysis",
                        "Feature adoption review",
                        "Cost-benefit analysis",
                        "Optimization recommendations",
                        "ROI improvement roadmap"
                      ]
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Strategic HR Planning",
                      description: "Long-term HR strategy development aligned with business growth objectives and technology capabilities.",
                      deliverables: [
                        "3-year HR technology roadmap",
                        "Talent strategy alignment",
                        "Organizational design recommendations",
                        "Workforce planning frameworks",
                        "HR metrics and KPI definition",
                        "Budget planning and justification"
                      ]
                    },
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Best Practices Implementation",
                      description: "Deployment of industry-leading HR practices tailored to your organization's unique context and objectives.",
                      deliverables: [
                        "Industry benchmarking analysis",
                        "Best practice identification",
                        "Customization for your context",
                        "Pilot program execution",
                        "Scaled rollout planning",
                        "Continuous improvement framework"
                      ]
                    }
                  ].map((service, index) => (
                    <Card key={index} className="border-2 hover:border-purple-600 transition-all">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                          {service.icon}
                        </div>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        <div className="mb-2 text-sm font-medium">Key Deliverables:</div>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Advisory Engagement Models */}
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-6 text-center">Advisory Engagement Models</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-3">Project-Based</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Defined scope, timeline, and deliverables for specific initiatives.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Fixed duration (8-16 weeks typical)</li>
                        <li>• Clear success criteria</li>
                        <li>• Dedicated project team</li>
                        <li>• Executive steering</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-3">Retained Advisory</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ongoing strategic partnership with monthly engagement hours.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Monthly hour allocation</li>
                        <li>• Flexible scope evolution</li>
                        <li>• Regular check-ins</li>
                        <li>• Priority access</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-3">Transformation Programs</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive multi-year engagements for enterprise-wide change.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 12-36 month duration</li>
                        <li>• Multiple workstreams</li>
                        <li>• Executive sponsorship</li>
                        <li>• Measurable outcomes</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Advisory CTA */}
              <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-8 text-center">
                <h3 className="text-2xl mb-4">Ready to unlock strategic value from your HR operations?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Schedule a consultation to discuss your HR transformation objectives and how our advisory services can drive measurable business outcomes.
                </p>
                <Button onClick={() => onNavigate('contact')} size="lg">
                  Schedule Advisory Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Combined Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">The Power of Combined Services</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our clients achieve the greatest value when combining AMS and Advisory services—creating a comprehensive partnership that handles both day-to-day operations and strategic transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="mb-3">Operational Excellence (AMS)</h4>
                <p className="text-sm text-slate-300">
                  Ensures your HR technology runs flawlessly, compliance is maintained, and your team is free from operational burden.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="mb-3">Strategic Impact (Advisory)</h4>
                <p className="text-sm text-slate-300">
                  Drives continuous improvement, adoption optimization, and alignment between HR operations and business growth objectives.
                </p>
              </div>
            </div>
            <Button onClick={() => onNavigate('pricing')} size="lg" className="mt-8 bg-white text-blue-600 hover:bg-slate-100">
              View Combined Service Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}