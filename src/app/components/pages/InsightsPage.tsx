import { BookOpen, FileText, TrendingUp, Download, Calendar, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function InsightsPage() {
  const playbooks = [
    {
      title: "HR Technology ROI Optimization Playbook",
      category: "Strategic Planning",
      description: "A comprehensive guide to measuring and improving ROI from your HR technology investments, including calculation frameworks, KPI definitions, and optimization strategies.",
      pages: "42 pages",
      downloadSize: "2.5 MB"
    },
    {
      title: "Darwinbox Implementation Best Practices",
      category: "Platform Guide",
      description: "Step-by-step playbook for successful Darwinbox implementations, covering planning, configuration, data migration, testing, and change management.",
      pages: "58 pages",
      downloadSize: "3.2 MB"
    },
    {
      title: "Multi-Country Payroll Compliance Framework",
      category: "Compliance",
      description: "Navigate the complexities of global payroll with this framework covering regulatory requirements, tax compliance, and audit readiness across 20+ countries.",
      pages: "67 pages",
      downloadSize: "4.1 MB"
    },
    {
      title: "AMS Service Design & Delivery Model",
      category: "Operations",
      description: "Blueprint for establishing world-class application management services for HR technology, including team structure, SLA frameworks, and governance models.",
      pages: "51 pages",
      downloadSize: "2.8 MB"
    }
  ];

  const whitepapers = [
    {
      title: "The State of HR Technology 2024",
      author: "HuPulse Research Team",
      date: "December 2024",
      description: "Annual industry report analyzing HR technology trends, adoption patterns, ROI benchmarks, and predictions for 2025 based on data from 200+ enterprises.",
      topics: ["Market trends", "ROI benchmarks", "Platform comparison", "Industry predictions"]
    },
    {
      title: "From Cost Center to Growth Engine: Transforming HR Operations",
      author: "Michael Chen, Chief Advisory Officer",
      date: "November 2024",
      description: "Strategic whitepaper examining how leading organizations are repositioning HR from administrative function to strategic business driver through technology and process optimization.",
      topics: ["Strategic HR", "Business value", "Case studies", "Transformation roadmaps"]
    },
    {
      title: "Compliance in the Age of Global Remote Work",
      author: "Sarah Johnson, VP of Payroll & Compliance",
      date: "October 2024",
      description: "Analysis of evolving compliance challenges with distributed workforces, covering tax implications, labor law complexities, and data privacy requirements across jurisdictions.",
      topics: ["Remote work compliance", "Tax implications", "Data privacy", "Best practices"]
    },
    {
      title: "AI and Automation in HR Technology: Separating Hype from Reality",
      author: "Amit Patel, VP of Platform Engineering",
      date: "September 2024",
      description: "Technical analysis of emerging AI capabilities in HR platforms, practical use cases, implementation considerations, and realistic expectations for ROI.",
      topics: ["AI capabilities", "Use cases", "Implementation", "ROI analysis"]
    }
  ];

  const blogPosts = [
    {
      title: "5 Signs Your HRIS Implementation Needs Expert Support",
      author: "Rajesh Kumar",
      date: "December 15, 2024",
      readTime: "6 min read",
      excerpt: "Recognizing when to bring in specialized expertise can be the difference between a struggling implementation and a transformative success."
    },
    {
      title: "Payroll Compliance: What Changed in 2024 and What to Expect in 2025",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "8 min read",
      excerpt: "A comprehensive review of regulatory changes across major jurisdictions and practical guidance for ensuring compliance in the new year."
    },
    {
      title: "The True Cost of DIY HR Technology Support",
      author: "Priya Sharma",
      date: "December 5, 2024",
      readTime: "5 min read",
      excerpt: "Why the 'we'll handle it internally' approach to HR technology support often costs more than professional AMS services."
    },
    {
      title: "Building a Change Management Strategy for HR Technology Adoption",
      author: "Michael Chen",
      date: "November 28, 2024",
      readTime: "10 min read",
      excerpt: "Proven frameworks for driving user adoption and minimizing resistance during HR technology implementations and upgrades."
    },
    {
      title: "Integration Best Practices: Connecting Your HR Technology Ecosystem",
      author: "Amit Patel",
      date: "November 20, 2024",
      readTime: "7 min read",
      excerpt: "Technical guidance for building robust, scalable integrations between HR platforms and third-party systems."
    },
    {
      title: "Quarterly Business Reviews: Getting Maximum Value from Your AMS Partner",
      author: "Lisa Martinez",
      date: "November 15, 2024",
      readTime: "4 min read",
      excerpt: "How to structure and maximize the value of quarterly business reviews with your application management service provider."
    }
  ];

  const complianceUpdates = [
    {
      jurisdiction: "European Union",
      title: "GDPR Enforcement Updates Q4 2024",
      date: "December 18, 2024",
      impact: "High",
      description: "New guidance on employee data retention and cross-border data transfers affecting multinational HR operations."
    },
    {
      jurisdiction: "United States",
      title: "Federal Overtime Rule Changes Delayed",
      date: "December 12, 2024",
      impact: "Medium",
      description: "Latest court ruling on DOL overtime regulations and implications for HRIS configuration and payroll processing."
    },
    {
      jurisdiction: "India",
      title: "Updated PF and ESI Contribution Limits",
      date: "December 5, 2024",
      impact: "High",
      description: "New contribution ceilings effective January 2025 requiring immediate payroll system updates and employee communication."
    },
    {
      jurisdiction: "United Kingdom",
      title: "Making Tax Digital (MTD) Expansion to PAYE",
      date: "November 28, 2024",
      impact: "High",
      description: "HMRC timeline for mandatory digital reporting requirements affecting payroll processes and system capabilities."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Insights & Resources</h1>
            <p className="text-xl text-slate-300 mb-8">
              Thought leadership, practical playbooks, and timely compliance updates to help you maximize value from your HR technology investments.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                placeholder="Search insights, topics, or authors..." 
                className="pl-12 pr-4 py-6 bg-white/10 border-white/30 text-white placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="playbooks" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            {/* Playbooks */}
            <TabsContent value="playbooks" className="space-y-8">
              <div className="text-center mb-8">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl mb-4">HR Playbooks</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive, actionable guides for HR technology implementation, optimization, and governance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {playbooks.map((playbook, index) => (
                  <Card key={index} className="border-2 hover:border-blue-600 transition-all">
                    <CardContent className="p-6">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-3">
                        {playbook.category}
                      </div>
                      <h3 className="mb-3">{playbook.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{playbook.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{playbook.pages}</span>
                        <span>{playbook.downloadSize}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Playbook
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-8 text-center">
                <h3 className="text-xl mb-3">Custom Playbook Development</h3>
                <p className="text-muted-foreground mb-4">
                  Need a playbook tailored to your specific platform, industry, or business context? Our advisory team can develop custom documentation and best practice guides.
                </p>
                <Button>Request Custom Playbook</Button>
              </div>
            </TabsContent>

            {/* Whitepapers */}
            <TabsContent value="whitepapers" className="space-y-8">
              <div className="text-center mb-8">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl mb-4">Research & Whitepapers</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  In-depth analysis, industry research, and thought leadership from our expert team.
                </p>
              </div>

              <div className="space-y-6">
                {whitepapers.map((paper, index) => (
                  <Card key={index} className="border-2 hover:border-purple-600 transition-all">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl mb-3">{paper.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span>By {paper.author}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {paper.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{paper.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {paper.topics.map((topic, idx) => (
                              <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-48">
                          <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                          <Button variant="outline">
                            Read Online
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Blog */}
            <TabsContent value="blog" className="space-y-8">
              <div className="text-center mb-8">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl mb-4">Blog & Articles</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Practical insights, tips, and perspectives from our team of HR technology experts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-2 hover:border-green-600 transition-all hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2 flex items-center justify-between">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mb-3">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>

            {/* Compliance Updates */}
            <TabsContent value="compliance" className="space-y-8">
              <div className="text-center mb-8">
                <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-3xl mb-4">Compliance Updates</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Timely updates on regulatory changes, labor law developments, and compliance requirements affecting HR operations.
                </p>
              </div>

              <div className="space-y-4">
                {complianceUpdates.map((update, index) => (
                  <Card key={index} className="border-l-4 border-l-orange-600">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                              {update.jurisdiction}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              update.impact === 'High' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {update.impact} Impact
                            </span>
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <h4 className="mb-2">{update.title}</h4>
                          <p className="text-sm text-muted-foreground">{update.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-orange-50 border-2 border-orange-600 rounded-lg p-8 text-center">
                <h3 className="text-xl mb-3">Compliance Alert Subscription</h3>
                <p className="text-muted-foreground mb-4">
                  Get timely email alerts when new compliance requirements affect your HR operations in your specific jurisdictions.
                </p>
                <Button>Subscribe to Compliance Alerts</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROI Calculators (Future-Ready) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl mb-4">ROI Calculators & Assessment Tools</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interactive tools to help you measure and optimize the return on your HR technology investments.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "AMS ROI Calculator",
                description: "Calculate potential cost savings and efficiency gains from outsourcing HR technology support"
              },
              {
                title: "HRIS Maturity Assessment",
                description: "Evaluate your current HR technology maturity and identify optimization opportunities"
              },
              {
                title: "Compliance Risk Scorecard",
                description: "Assess your compliance posture across multiple jurisdictions and regulatory domains"
              },
              {
                title: "Platform Utilization Analyzer",
                description: "Benchmark your HR platform adoption and feature utilization against industry standards"
              }
            ].map((tool, index) => (
              <Card key={index} className="text-left">
                <CardContent className="p-6">
                  <h4 className="mb-2">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Button variant="outline" size="sm" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            These interactive tools are currently in development. <a href="#" className="text-blue-600 hover:underline">Contact us</a> for a personalized assessment.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our monthly newsletter for the latest insights, compliance updates, and HR technology best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/30 text-white placeholder:text-slate-300"
            />
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
