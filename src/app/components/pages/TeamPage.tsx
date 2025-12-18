import { Linkedin, Mail, Award, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function TeamPage() {
  const leadership = [
   {
  "name": "Deepak Chawdhary",
  "role": "Founder & CEO",
  "specialty": "Operations, Customer Success & People Leadership",
  "image": "placeholder",
  "experience": [
    "16+ years of diverse experience across Retail, Human Resources, and Customer Success functions",
    "Led large-scale operations and managed frontline workforce in high-growth, fast-paced environments",
    "Designed and executed customer engagement strategies to ensure high-performance service delivery",
    "Built and scaled customer success frameworks focused on retention, satisfaction, and value realization",
    "Proven expertise in operational excellence combined with strong people leadership capabilities"
  ],
  "thoughtLeadership": [
    "Recognized for driving customer-centric operating models in HR and people-driven domains",
    "Advocate of operational scalability through strong service delivery foundations",
    "Brings a pragmatic, execution-focused mindset essential for building sustainable HR services organizations"
  ]
}
,
    {
      name: "Gokul",
      role: "Chief Delivery Officer",
      specialty: "AMS Operations & Service Excellence",
      image: "placeholder",
      experience: [
        "12+ years in application management and IT service delivery",
        "Former Global Delivery Head at major IT services firm",
        "Built and scaled AMS practices from 20 to 200+ FTEs",
        "ITIL Expert certified with PMP and Six Sigma Black Belt",
        "Expertise in SLA management and operational excellence"
      ],
      thoughtLeadership: [
        "Developed industry-leading AMS frameworks",
        "Published case studies on service delivery optimization",
        "Regular contributor to ITSM industry publications"
      ]
    },
    {
  "name": "Jaydeep Patel",
  "role": "Co-Founder & Head of AI, Data & Automation",
  "specialty": "Data & Business Analytics & Intelligent Automation",
  "image": "placeholder",
  "experience": [
    "Experience across consulting, analytics, and data engineering roles, delivering data-driven solutions in large-scale, enterprise environments",
    "Hands-on expertise in designing and optimizing cloud-based ETL pipelines using modern data engineering frameworks to ensure scalability and reliability",
    "Built automated KPI reporting and business intelligence dashboards, significantly reducing manual effort and improving decision-making speed",
    "Strong background in translating complex business requirements into technical solutions using analytics, automation, and data modeling",
    "Led initiatives focused on data governance, metric standardization, and operational reporting across cross-functional stakeholder groups"
  ],
  "thoughtLeadership": [
    "Advocate for automation-first, data-driven operating models to enhance efficiency, transparency, and business agility",
    "Focused on building AI- and GenAI-ready data foundations that enable intelligent insights, predictive analytics, and future HR tech innovation",
    "Brings a structured, problem-solving mindset that bridges business analysis, data engineering, and next-generation automation"
  ]
}

  ];

  const organizationalStructure = {
    coreTeams: [
      {
        name: "AMS Delivery Team",
        headcount: "10-12 FTEs (Phase A)",
        roles: [
          "L1 Support Agents (3-4)",
          "L2 Technical Specialists (3-4)",
          "L3 Platform Architects (2-3)",
          "Payroll Operations Specialists (2)"
        ],
        responsibilities: "Day-to-day technical support, incident management, payroll execution, and system maintenance"
      },
      {
        name: "HR Advisory Team",
        headcount: "3-5 FTEs (Phase A)",
        roles: [
          "Senior HR Consultants (2-3)",
          "Change Management Specialists (1-2)",
          "Compliance & Policy Advisors (1)"
        ],
        responsibilities: "Strategic consulting, process optimization, change management, and compliance advisory"
      },
      {
        name: "Client Success Team",
        headcount: "2-3 FTEs (Phase A)",
        roles: [
          "Account Managers (2)",
          "Client Success Coordinator (1)"
        ],
        responsibilities: "Relationship management, QBRs, escalation handling, and client satisfaction"
      },
      {
        name: "Platform Engineering",
        headcount: "2-3 FTEs (Phase A)",
        roles: [
          "Integration Engineers (2)",
          "Platform Configuration Specialist (1)"
        ],
        responsibilities: "Custom integrations, platform configuration, technical architecture, and automation"
      },
      {
        name: "Operations & Enablement",
        headcount: "2-3 FTEs (Phase A)",
        roles: [
          "Operations Manager (1)",
          "Training & Knowledge Manager (1)",
          "Quality & Compliance Lead (1)"
        ],
        responsibilities: "Internal operations, training programs, quality assurance, and governance"
      }
    ],
    scalingModel: [
      {
        phase: "Phase A (Current)",
        totalHeadcount: "15-20 FTEs",
        structure: "Lean, cross-functional teams with high individual contributor impact"
      },
      {
        phase: "Phase B (Year 2-3)",
        totalHeadcount: "40-50 FTEs",
        structure: "Specialized pods by industry/platform with dedicated team leads"
      },
      {
        phase: "Phase C (Year 3-4)",
        totalHeadcount: "80-100 FTEs",
        structure: "Departmental structure with VPs, regional delivery centers, and Centers of Excellence"
      },
      {
        phase: "Phase D (Year 4-5+)",
        totalHeadcount: "200+ FTEs",
        structure: "Global matrix organization with geographic P&Ls and functional excellence teams"
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Leadership & Team</h1>
            <p className="text-xl text-slate-300">
              A seasoned team of HR strategists, payroll experts, and technology specialists committed to transforming your HR operations into a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Executive Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across HR strategy, technology, operations, and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Profile Header */}
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-center mb-1">{leader.name}</h3>
                    <p className="text-center text-sm text-blue-600 mb-2">{leader.role}</p>
                    <div className="flex justify-center gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Linkedin className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Mail className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="mb-4 pb-4 border-b border-border">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-2">
                      {leader.specialty}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <h4 className="text-sm mb-2">Experience Highlights</h4>
                    <ul className="space-y-1">
                      {leader.experience.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Thought Leadership */}
                  <div>
                    <h4 className="text-sm mb-2">Thought Leadership</h4>
                    <ul className="space-y-1">
                      {leader.thoughtLeadership.map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <Award className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Team Philosophy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Expertise-First Hiring",
                description: "We hire for deep domain expertise, platform certifications, and proven track records in HR technology and operations—not just general consulting skills."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client-Centric Culture",
                description: "Every team member is empowered to make client-first decisions. We measure success by client outcomes, not just internal KPIs."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Continuous Learning",
                description: "Mandatory platform certifications, quarterly training budgets, and knowledge-sharing sessions ensure our team stays at the forefront of HR technology."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Organization Structure & Scalability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for today's needs with a clear path to scale as we grow
            </p>
          </div>

          {/* Core Teams */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center">Core Delivery Teams</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizationalStructure.coreTeams.map((team, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <h4 className="mb-2">{team.name}</h4>
                    <div className="text-sm text-blue-600 mb-4">{team.headcount}</div>
                    
                    <div className="mb-4">
                      <div className="text-sm mb-2">Key Roles:</div>
                      <ul className="space-y-1">
                        {team.roles.map((role, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">• {role}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-sm mb-1">Responsibilities:</div>
                      <p className="text-xs text-muted-foreground">{team.responsibilities}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scaling Model */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl mb-6 text-center">Scaling Model by Growth Phase</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {organizationalStructure.scalingModel.map((phase, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="mb-1">{phase.phase}</h4>
                        <div className="text-2xl text-blue-600">{phase.totalHeadcount}</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.structure}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Accountability */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Governance & Accountability</h2>
            <p className="text-xl text-slate-300 mb-8">
              Clear ownership, transparent reporting, and executive accountability for every client engagement
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Named Account Owners",
                  description: "Every client has a dedicated account manager who is personally accountable for your success and satisfaction."
                },
                {
                  title: "Executive Escalation Path",
                  description: "Direct access to executive leadership for strategic decisions and critical issue resolution."
                },
                {
                  title: "Regular Performance Reviews",
                  description: "Monthly reporting and quarterly business reviews to ensure transparency and continuous improvement."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl mb-4">Join Our Growing Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented HR strategists, payroll experts, and technology specialists who are passionate about transforming HR operations. If you're driven by client impact and continuous learning, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@hupulseglobal.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Open Positions
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
