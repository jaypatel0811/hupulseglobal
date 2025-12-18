import { Rocket, TrendingUp, Globe2, Lightbulb, Award, Building2, Users, Target, BookOpen, GitBranch } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function GrowthPlanPage() {
  const phases = [
    {
      phase: "A",
      title: "Foundation & Early Clients",
      timeline: "Year 1-2 (Current Phase)",
      status: "In Progress",
      color: "blue",
      objectives: [
        "Establish core AMS and HR Advisory service delivery capabilities",
        "Build foundational client base with 10-15 enterprise clients",
        "Achieve consistent service delivery excellence and client satisfaction",
        "Develop repeatable operating model and documented best practices",
        "Build strong case studies demonstrating measurable ROI"
      ],
      keyInitiatives: [
        {
          area: "Service Delivery",
          items: [
            "Build L1-L3 support team (10-15 FTEs)",
            "Implement ticketing and ITSM infrastructure",
            "Develop SLA frameworks and governance processes",
            "Create training and knowledge management systems",
            "Establish QBR and reporting templates"
          ]
        },
        {
          area: "Platform Expertise",
          items: [
            "Achieve Darwinbox partnership and certifications",
            "Build expertise in 2-3 core HR platforms",
            "Develop platform-specific playbooks and documentation",
            "Create integration accelerators and templates"
          ]
        },
        {
          area: "Client Acquisition",
          items: [
            "Target mid-market and enterprise organizations (500-5,000 employees)",
            "Focus on IT, SaaS, and professional services sectors",
            "Leverage referrals and partner networks",
            "Build initial case studies and testimonials"
          ]
        }
      ],
      metrics: [
        "10-15 active clients",
        "90%+ client retention",
        "NPS score > 50",
        "$1.5M - $3M ARR",
        "15-20 team members"
      ]
    },
    {
      phase: "B",
      title: "Advanced AMS & Analytics",
      timeline: "Year 2-3",
      status: "Planned",
      color: "green",
      objectives: [
        "Expand service offerings to include advanced analytics and automation",
        "Scale client base to 30-40 enterprise clients across multiple industries",
        "Develop predictive and proactive support capabilities",
        "Build industry-specific expertise and vertical solutions",
        "Establish thought leadership in HR technology enablement"
      ],
      keyInitiatives: [
        {
          area: "Service Innovation",
          items: [
            "Launch predictive analytics and AI-powered monitoring",
            "Develop automation frameworks for common HR processes",
            "Create industry-specific service packages (BFSI, Healthcare, Retail)",
            "Build advanced compliance and audit capabilities",
            "Introduce ROI analytics and business intelligence services"
          ]
        },
        {
          area: "Platform Expansion",
          items: [
            "Extend support to 5-7 major HR platforms",
            "Develop multi-platform integration expertise",
            "Build vendor relationship programs with HR tech providers",
            "Create platform migration and optimization services"
          ]
        },
        {
          area: "Geographic Expansion",
          items: [
            "Establish 24/7 support with follow-the-sun model",
            "Build localized compliance expertise (US, EU, APAC)",
            "Develop multi-country payroll capabilities",
            "Create region-specific service delivery teams"
          ]
        }
      ],
      metrics: [
        "30-40 active clients",
        "95%+ client retention",
        "NPS score > 60",
        "$5M - $8M ARR",
        "40-50 team members",
        "3 geographic hubs"
      ]
    },
    {
      phase: "C",
      title: "End-to-End HR Transformation",
      timeline: "Year 3-4",
      status: "Future",
      color: "purple",
      objectives: [
        "Position as comprehensive HR transformation partner",
        "Expand to 60-80 enterprise clients with multi-year engagements",
        "Launch HR technology marketplace and ecosystem partnerships",
        "Develop proprietary IP and accelerators",
        "Establish industry recognition and analyst relations"
      ],
      keyInitiatives: [
        {
          area: "Transformation Services",
          items: [
            "Launch full HR operating model redesign services",
            "Develop change management and organizational design capabilities",
            "Create workforce planning and talent analytics services",
            "Build employee experience optimization practice",
            "Establish C-suite HR advisory services"
          ]
        },
        {
          area: "Technology & IP",
          items: [
            "Develop proprietary AMS platform and automation tools",
            "Build AI-powered HR assistant and chatbot capabilities",
            "Create industry benchmarking and analytics database",
            "Launch self-service diagnostic and assessment tools",
            "File patents for innovative HR tech solutions"
          ]
        },
        {
          area: "Ecosystem & Partnerships",
          items: [
            "Establish formal partnerships with major HR tech vendors",
            "Create marketplace for complementary HR solutions",
            "Build reseller and implementation partner network",
            "Develop co-innovation programs with platform providers"
          ]
        }
      ],
      metrics: [
        "60-80 active clients",
        "96%+ client retention",
        "NPS score > 70",
        "$12M - $18M ARR",
        "80-100 team members",
        "5 global delivery centers",
        "Recognized in Gartner/Forrester reports"
      ]
    },
    {
      phase: "D",
      title: "Global Expansion & Center of Excellence",
      timeline: "Year 4-5+",
      status: "Vision",
      color: "orange",
      objectives: [
        "Scale to 100+ global enterprise clients",
        "Establish HuPulse as the global standard for HR technology enablement",
        "Build Center of Excellence (CoE) for HR technology innovation",
        "Expand into adjacent markets (talent tech, learning tech, payroll platforms)",
        "Explore strategic partnerships, M&A, or potential exit opportunities"
      ],
      keyInitiatives: [
        {
          area: "Global Scale",
          items: [
            "Establish presence in 10+ countries across 4 continents",
            "Build local delivery teams with deep regional expertise",
            "Develop global account management for multinational clients",
            "Create standardized yet localized service delivery model",
            "Achieve ISO and industry-specific certifications globally"
          ]
        },
        {
          area: "Center of Excellence",
          items: [
            "Establish HR Technology Research & Innovation Lab",
            "Partner with universities for HR tech academic programs",
            "Publish annual State of HR Technology reports",
            "Host global HR technology summit and conferences",
            "Create certification programs for HR technology professionals"
          ]
        },
        {
          area: "Strategic Growth",
          items: [
            "Explore acquisition of complementary service providers",
            "Evaluate strategic partnerships with Big 4 consulting firms",
            "Consider private equity or strategic investor relationships",
            "Assess platform plays (building vs. buying HR tech assets)",
            "Evaluate potential exit scenarios (acquisition, IPO, merger)"
          ]
        }
      ],
      metrics: [
        "100+ active clients globally",
        "97%+ client retention",
        "NPS score > 75",
        "$30M+ ARR",
        "200+ team members",
        "10+ global locations",
        "Market leader in HR tech enablement",
        "Valuation milestone: $100M+"
      ]
    }
  ];

  const colorStyles = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600', badge: 'bg-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600', badge: 'bg-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600', badge: 'bg-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600', badge: 'bg-orange-600' }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Growth Plan & Vision</h1>
            <p className="text-xl text-slate-300">
              A clear roadmap to becoming the world's most trusted partner in HR technology enablement—built on phased growth, strategic partnerships, and continuous innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl mb-6">Our 5-Year Vision</h2>
          <p className="text-lg text-muted-foreground mb-6">
            To transform HuPulse Global from a specialized HR technology AMS provider into a globally recognized Center of Excellence for end-to-end HR transformation—combining technology enablement, strategic advisory, and innovation leadership.
          </p>
          <p className="text-lg">
            We will achieve this through disciplined execution across four growth phases, each building on the foundation of the previous stage while expanding capabilities, geography, and impact.
          </p>
        </div>
      </section>

      {/* Growth Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const colors = colorStyles[phase.color as keyof typeof colorStyles];
              
              return (
                <div key={index}>
                  <Card className={`border-l-4 ${colors.border}`}>
                    <CardContent className="p-8">
                      {/* Phase Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text}`}>
                              <span className="text-2xl">Phase {phase.phase}</span>
                            </div>
                            <div>
                              <h3 className="text-2xl">{phase.title}</h3>
                              <p className="text-muted-foreground">{phase.timeline}</p>
                            </div>
                          </div>
                        </div>
                        <div className={`inline-block px-4 py-2 ${colors.badge} text-white rounded-full text-sm`}>
                          {phase.status}
                        </div>
                      </div>

                      {/* Objectives */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 text-muted-foreground" />
                          <h4>Strategic Objectives</h4>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {phase.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.badge} mt-2 flex-shrink-0`}></div>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Initiatives */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <GitBranch className="w-5 h-5 text-muted-foreground" />
                          <h4>Key Initiatives</h4>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-6">
                          {phase.keyInitiatives.map((initiative, idx) => (
                            <div key={idx} className={`${colors.bg} rounded-lg p-4`}>
                              <h5 className="mb-3">{initiative.area}</h5>
                              <ul className="space-y-2">
                                {initiative.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="text-sm flex items-start gap-2">
                                    <span className={`${colors.text} mt-1`}>•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Success Metrics */}
                      <div className={`${colors.bg} rounded-lg p-6`}>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className={`w-5 h-5 ${colors.text}`} />
                          <h4>Success Metrics & Milestones</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                          {phase.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center bg-white rounded-lg p-3">
                              <div className={`text-sm ${colors.text}`}>{metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase Connector */}
                  {index < phases.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-border to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Strategic Partnerships & Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a comprehensive ecosystem of technology partners, academic institutions, and industry alliances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-3">HR Technology Vendors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Formal partnerships with leading HR platform providers to deliver certified expertise and priority support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Darwinbox (Primary Partnership - Current)</li>
                  <li>• Workday (Phase B Target)</li>
                  <li>• SAP SuccessFactors (Phase B Target)</li>
                  <li>• Oracle HCM Cloud (Phase C Target)</li>
                  <li>• ADP, Paylocity, Gusto (Payroll Platforms)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="mb-3">Academic Collaboration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partnerships with universities to advance HR technology research and develop future talent.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Research partnerships with leading business schools</li>
                  <li>• Guest lectures and curriculum development</li>
                  <li>• Internship and talent pipeline programs</li>
                  <li>• Joint publications and thought leadership</li>
                  <li>• Sponsorship of HR technology academic programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="mb-3">Industry Alliances</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Active participation in industry associations and standards bodies to shape the future of HR technology.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• SHRM (Society for Human Resource Management)</li>
                  <li>• HR Technology Conference advisory board</li>
                  <li>• Membership in regional HR associations</li>
                  <li>• Participation in HR tech standards committees</li>
                  <li>• Speaking engagements at major industry events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Readiness */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Global Expansion Readiness</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a foundation for global scale from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <Globe2 className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="mb-4">Geographic Expansion Plan</h3>
                <div className="space-y-4">
                  {[
                    {
                      phase: "Phase A-B",
                      regions: "North America focus with select APAC clients",
                      hubs: "Primary hub: US-based operations"
                    },
                    {
                      phase: "Phase B-C",
                      regions: "Expand to Europe and broader APAC coverage",
                      hubs: "Additional hubs in UK/EU and Singapore/India"
                    },
                    {
                      phase: "Phase C-D",
                      regions: "Global presence including Middle East, LatAm",
                      hubs: "10+ delivery centers across 4 continents"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-4">
                      <div className="text-sm text-blue-600 mb-1">{item.phase}</div>
                      <div className="mb-1">{item.regions}</div>
                      <div className="text-sm text-muted-foreground">{item.hubs}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="mb-4">Innovation & Thought Leadership</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="mb-1">Annual State of HR Technology Report</div>
                      <p className="text-sm text-muted-foreground">Industry-leading research and benchmarking data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="mb-1">HuPulse Global Summit</div>
                      <p className="text-sm text-muted-foreground">Annual conference for HR technology leaders</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="mb-1">Certification Programs</div>
                      <p className="text-sm text-muted-foreground">Professional certifications for HR tech practitioners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="mb-1">Innovation Lab</div>
                      <p className="text-sm text-muted-foreground">R&D facility for emerging HR technologies</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment & Capital */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Capital Strategy & Investment Roadmap</h2>
          <p className="text-xl text-slate-300 mb-8">
            HuPulse Global is positioned for sustainable, profitable growth with clear milestones for potential strategic investment or partnership opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "Phase A-B",
                approach: "Bootstrap & Organic Growth",
                focus: "Reinvest revenue for team expansion and capability building"
              },
              {
                stage: "Phase B-C",
                approach: "Strategic Partnerships",
                focus: "Evaluate partnerships with HR tech vendors or PE firms for scaling capital"
              },
              {
                stage: "Phase C-D",
                approach: "Growth Equity or Strategic M&A",
                focus: "Consider growth equity investment or strategic acquisition to accelerate global expansion"
              }
            ].map((stage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-left">
                <div className="text-sm text-blue-300 mb-2">{stage.stage}</div>
                <h4 className="mb-3">{stage.approach}</h4>
                <p className="text-sm text-slate-300">{stage.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
