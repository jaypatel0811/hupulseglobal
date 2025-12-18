import { Search, ArrowRight, Settings, Rocket, TrendingUp, RefreshCw, CheckCircle2, Users, Calendar, FileText, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function HowWeWorkPage() {
  const operatingModel = [
    {
      phase: "1",
      title: "Current State Analysis",
      icon: <Search className="w-8 h-8" />,
      duration: "2-4 weeks",
      color: "blue",
      objective: "Comprehensive understanding of your current HR technology landscape, processes, pain points, and business objectives.",
      activities: [
        "Stakeholder interviews across HR, IT, and business leadership",
        "Platform configuration and utilization review",
        "Process documentation and mapping",
        "Pain point and opportunity identification",
        "Compliance and risk assessment",
        "Success metrics definition"
      ],
      clientValue: [
        "Clear visibility into current state strengths and gaps",
        "Documented baseline for measuring future improvement",
        "Alignment on priorities and success criteria",
        "Risk mitigation through early issue identification"
      ]
    },
    {
      phase: "2",
      title: "Account Transition",
      icon: <ArrowRight className="w-8 h-8" />,
      duration: "3-6 weeks",
      color: "green",
      objective: "Smooth knowledge transfer and relationship establishment to ensure seamless service delivery from day one.",
      activities: [
        "Dedicated transition team assignment",
        "Knowledge transfer sessions with incumbent teams",
        "Access provisioning and security setup",
        "Communication plan execution",
        "Transition risk mitigation",
        "Parallel run period (if applicable)"
      ],
      clientValue: [
        "Zero disruption to ongoing operations",
        "Named account team with deep context on your business",
        "Clear communication and stakeholder confidence",
        "Validated readiness before full transition"
      ]
    },
    {
      phase: "3",
      title: "Service Setup",
      icon: <Settings className="w-8 h-8" />,
      duration: "4-8 weeks",
      color: "purple",
      objective: "Establish support infrastructure, optimize platform configuration, and deploy governance frameworks.",
      activities: [
        "Support ticket system configuration",
        "SLA and escalation procedure definition",
        "Platform optimization based on discovery findings",
        "Compliance framework implementation",
        "Documentation repository creation",
        "User training program deployment"
      ],
      clientValue: [
        "Optimized platform performance from the start",
        "Clear accountability and response expectations",
        "Proactive compliance and governance",
        "Empowered users through comprehensive training"
      ]
    },
    {
      phase: "4",
      title: "Steady-State Support",
      icon: <Rocket className="w-8 h-8" />,
      duration: "Ongoing",
      color: "orange",
      objective: "Deliver consistent, high-quality operational support while maintaining system health and user satisfaction.",
      activities: [
        "L1-L3 tiered support delivery",
        "Proactive system health monitoring",
        "Monthly payroll execution and validation",
        "Incident and change management",
        "Compliance monitoring and updates",
        "Regular client communication and reporting"
      ],
      clientValue: [
        "Predictable, reliable HR technology operations",
        "Freed HR team capacity for strategic work",
        "Maintained compliance and reduced risk",
        "Transparent performance visibility through regular reporting"
      ]
    },
    {
      phase: "5",
      title: "Continuous Improvement",
      icon: <TrendingUp className="w-8 h-8" />,
      duration: "Quarterly cycles",
      color: "teal",
      objective: "Systematically identify and implement opportunities to enhance performance, adoption, and business value.",
      activities: [
        "Quarterly Business Reviews (QBRs)",
        "Performance metrics analysis and trending",
        "User satisfaction surveys and feedback",
        "Optimization opportunity identification",
        "Best practice implementation",
        "Technology roadmap alignment"
      ],
      clientValue: [
        "Continuous ROI improvement over time",
        "Proactive identification of enhancement opportunities",
        "Data-driven decision making",
        "Long-term strategic partnership versus transactional vendor relationship"
      ]
    },
    {
      phase: "6",
      title: "Post-Implementation Optimization",
      icon: <RefreshCw className="w-8 h-8" />,
      duration: "As needed",
      color: "red",
      objective: "Optimize newly implemented features, address adoption challenges, and ensure sustained business value.",
      activities: [
        "New feature adoption assessment",
        "User feedback collection and analysis",
        "Configuration refinement",
        "Additional training and enablement",
        "Process adjustment recommendations",
        "Success metrics validation"
      ],
      clientValue: [
        "Maximum value from new platform capabilities",
        "Reduced time-to-value for new features",
        "Sustained user adoption and satisfaction",
        "Continuous alignment with evolving business needs"
      ]
    }
  ];

  const colorStyles = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-600' }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">How We Work</h1>
            <p className="text-xl text-slate-300">
              A proven, structured operating model that ensures seamless transitions, consistent delivery, and continuous value improvement throughout our partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Model Introduction */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Our Six-Phase Operating Model</h2>
          <p className="text-lg text-muted-foreground">
            Every client engagement follows our proven framework, ensuring predictable outcomes, clear accountability, and measurable value at each stage.
          </p>
        </div>
      </section>

      {/* Detailed Operating Model */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {operatingModel.map((phase, index) => {
              const colors = colorStyles[phase.color as keyof typeof colorStyles];
              
              return (
                <div key={index} className="relative">
                  {/* Phase Card */}
                  <Card className={`border-l-4 ${colors.border}`}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left: Phase Info */}
                        <div className="lg:col-span-1">
                          <div className={`inline-flex items-center gap-3 ${colors.bg} rounded-lg p-4 mb-4`}>
                            <div className={colors.text}>
                              {phase.icon}
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Phase {phase.phase}</div>
                              <h3 className="text-xl">{phase.title}</h3>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Duration:</span>
                              <span>{phase.duration}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="mb-2">Objective</h4>
                            <p className="text-sm text-muted-foreground">{phase.objective}</p>
                          </div>
                        </div>

                        {/* Middle: Activities */}
                        <div className="lg:col-span-1">
                          <div className="flex items-center gap-2 mb-3">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            <h4>Key Activities</h4>
                          </div>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: Client Value */}
                        <div className="lg:col-span-1">
                          <div className="flex items-center gap-2 mb-3">
                            <BarChart3 className="w-5 h-5 text-muted-foreground" />
                            <h4>Client Value</h4>
                          </div>
                          <ul className="space-y-2">
                            {phase.clientValue.map((value, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connector Arrow */}
                  {index < operatingModel.length - 1 && (
                    <div className="flex justify-center my-6">
                      <div className="w-0.5 h-8 bg-border"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Communication */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Governance & Communication</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured touchpoints and reporting to ensure transparency, alignment, and continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                frequency: "Daily",
                activity: "System Health Monitoring",
                description: "Automated monitoring with proactive alerts for any anomalies or performance issues"
              },
              {
                frequency: "Weekly",
                activity: "Account Team Sync",
                description: "Internal team coordination to review open items, plan upcoming activities, and address emerging needs"
              },
              {
                frequency: "Monthly",
                activity: "Client Check-in & Reporting",
                description: "Structured review of service delivery metrics, ticket trends, and upcoming initiatives"
              },
              {
                frequency: "Quarterly",
                activity: "Business Review (QBR)",
                description: "Executive-level review of performance, ROI, strategic initiatives, and roadmap planning"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl text-blue-600 mb-2">{item.frequency}</div>
                  <h4 className="mb-3">{item.activity}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation & Accountability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Escalation & Accountability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear ownership and escalation paths ensure issues are resolved quickly and effectively
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      level: "L1 Support Agent",
                      responsibility: "First point of contact for all user queries and incidents",
                      sla: "4-hour response time for all tickets"
                    },
                    {
                      level: "L2 Technical Lead",
                      responsibility: "Complex issue resolution, configuration changes, and L1 support escalations",
                      sla: "8-hour response for escalated tickets"
                    },
                    {
                      level: "L3 Platform Architect",
                      responsibility: "Architecture decisions, vendor escalations, and critical incident management",
                      sla: "24-hour response for critical escalations"
                    },
                    {
                      level: "Account Manager",
                      responsibility: "Overall account health, relationship management, and strategic planning",
                      sla: "Single point of accountability for client satisfaction"
                    },
                    {
                      level: "Delivery Director",
                      responsibility: "Executive escalation point and ultimate accountability for service delivery",
                      sla: "Available for critical business issues and strategic decisions"
                    }
                  ].map((role, index) => (
                    <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{role.level}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{role.responsibility}</p>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          {role.sla}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Tools & Technology Stack</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade tooling to ensure efficient service delivery and transparent reporting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Ticketing & ITSM",
                tools: ["ServiceNow / Freshdesk", "Automated routing & SLA tracking", "Self-service portal", "Knowledge base integration"]
              },
              {
                category: "Monitoring & Analytics",
                tools: ["Platform health dashboards", "Performance analytics", "User adoption tracking", "Compliance monitoring"]
              },
              {
                category: "Communication & Collaboration",
                tools: ["Dedicated Slack/Teams channel", "Video conferencing for reviews", "Shared documentation repository", "Secure file transfer"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
