import { Target, Eye, Shield, Users, TrendingUp, Globe, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">About HuPulse Global</h1>
            <p className="text-xl text-slate-300">
              We exist to transform how organizations leverage HR technology—turning operational complexity into strategic advantage and measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-600">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To be the world's most trusted partner in HR technology enablement, where every organization—regardless of size or geography—can unlock the full strategic potential of their HR operations.
                </p>
                <p className="text-muted-foreground">
                  We envision a future where HR teams are empowered by technology, not burdened by it, and where HR operations directly contribute to competitive advantage and business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To deliver enterprise-grade Application Management Services and strategic HR Advisory that enable organizations to maximize ROI from their HR technology investments while maintaining the highest standards of compliance, security, and operational excellence.
                </p>
                <p className="text-muted-foreground">
                  We achieve this through deep platform expertise, proactive support, and a relentless focus on measurable business outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The HuPulse Concept */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6">The HuPulse Concept</h2>
            <p className="text-xl text-muted-foreground">
              HR as a Strategic Growth Engine
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Traditional HR operations are often viewed as cost centers—administrative functions that must be managed but rarely drive strategic value. We fundamentally reject this paradigm.
                </p>
                
                <p className="text-lg mb-6">
                  <span className="font-semibold">HuPulse Global</span> represents the heartbeat of modern HR operations—where <span className="font-semibold">People, Process, and Technology</span> work in perfect synchronization to create measurable business impact.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                  <h3 className="mb-4">The Three Pulses of HR Excellence</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2">1. People Pulse</h4>
                      <p className="text-sm text-muted-foreground">
                        Understanding that HR technology ultimately serves people—employees, managers, and leadership. Every solution must enhance the human experience, not complicate it.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">2. Process Pulse</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimizing workflows to eliminate friction, reduce administrative burden, and ensure compliance—allowing HR teams to focus on strategic initiatives that drive business growth.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">3. Technology Pulse</h4>
                      <p className="text-sm text-muted-foreground">
                        Maximizing the ROI of HR technology platforms through expert configuration, proactive support, and continuous optimization aligned with business objectives.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg">
                  When these three pulses beat in harmony, HR operations transform from cost centers into strategic growth engines—driving talent outcomes, operational efficiency, and competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every client engagement and business decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trust & Integrity",
                description: "We handle sensitive employee data and mission-critical HR processes. Trust is earned through consistent delivery, transparency, and unwavering ethical standards."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Measurable Outcomes",
                description: "Every engagement includes defined success metrics, regular reporting, and continuous optimization. We're accountable for delivering tangible business value."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client Partnership",
                description: "We're not vendors executing tasks—we're strategic partners invested in your long-term success. Your challenges are our challenges; your wins are our wins."
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Continuous Innovation",
                description: "The HR technology landscape evolves rapidly. We stay ahead through continuous learning, platform certifications, and proactive adoption of best practices."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">Leadership Philosophy</h2>
            
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="mb-3">Expertise-Driven, Relationship-Focused</h3>
                  <p className="text-muted-foreground">
                    Our leadership team combines deep HR domain expertise with extensive experience in enterprise technology implementations. We understand both the strategic HR challenges our clients face and the technical complexities of modern HR platforms.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3">Servant Leadership Model</h3>
                  <p className="text-muted-foreground">
                    We believe great leaders empower their teams and clients. Our leadership philosophy emphasizes collaboration, knowledge sharing, and developing the capabilities of both our internal teams and client organizations.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3">Long-Term Value Creation</h3>
                  <p className="text-muted-foreground">
                    We optimize for long-term client relationships and sustainable business outcomes, not short-term revenue. This means sometimes recommending solutions that may not maximize immediate billing but deliver superior long-term value.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3">Accountability & Ownership</h3>
                  <p className="text-muted-foreground">
                    Every client has a named account owner who is personally accountable for your success. No ticket queues, no anonymous support agents—just dedicated professionals who know your business and care about your outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance, Security, and Trust */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Compliance, Security, and Trust</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security and governance built into every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="mb-3">Data Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC 2 Type II compliance roadmap</li>
                  <li>• End-to-end data encryption</li>
                  <li>• Role-based access controls</li>
                  <li>• Regular security audits</li>
                  <li>• GDPR and data privacy adherence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="mb-3">Compliance Framework</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-country labor law expertise</li>
                  <li>• Tax regulation compliance</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Regulatory change monitoring</li>
                  <li>• Proactive compliance updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="mb-3">Business Continuity</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 99.8% uptime SLA commitment</li>
                  <li>• Disaster recovery protocols</li>
                  <li>• Redundant infrastructure</li>
                  <li>• 24/7 monitoring and support</li>
                  <li>• Documented escalation procedures</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach, Local Expertise */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Global Reach, Local Expertise</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We support organizations across geographies with localized compliance knowledge and 24/7 coverage—combining the scale of a global provider with the personalized service of a dedicated partner.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { region: 'North America', coverage: '24/7' },
              { region: 'Europe', coverage: '24/7' },
              { region: 'Asia Pacific', coverage: '24/7' },
              { region: 'Middle East', coverage: 'Business Hours' }
            ].map((region, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">{region.region}</div>
                <div className="text-sm text-blue-200">{region.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}