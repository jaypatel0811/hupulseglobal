import { Mail, Phone, MapPin, Calendar, Send, MessageSquare, Linkedin } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    employees: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our team will be in touch within 24 hours.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Let's Talk About Your HR Technology Needs</h1>
            <p className="text-xl text-slate-300">
              Schedule a consultation with our experts to discuss how HuPulse Global can transform your HR operations and drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Schedule a Consultation",
                description: "Book a 30-minute discovery call with our team to discuss your specific needs and explore how we can help.",
                action: "Schedule Now",
                color: "blue"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Submit an Inquiry",
                description: "Fill out our contact form below and we'll respond within 24 hours with a customized proposal.",
                action: "Fill Form Below",
                color: "purple"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us Directly",
                description: "Prefer email? Reach out to us directly and we'll schedule a time to discuss your requirements.",
                action: "Send Email",
                color: "green"
              }
            ].map((option, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${option.color}-100 rounded-full flex items-center justify-center text-${option.color}-600`}>
                    {option.icon}
                  </div>
                  <h3 className="mb-3">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{option.description}</p>
                  <Button variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Form */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          required
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          required
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        placeholder="john.smith@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        required
                        placeholder="Your Company Inc."
                      />
                    </div>

                    {/* Role and Employees */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role">Your Role *</Label>
                        <Select onValueChange={(value) => handleChange('role', value)}>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chro">CHRO / VP HR</SelectItem>
                            <SelectItem value="hr-director">HR Director</SelectItem>
                            <SelectItem value="hr-manager">HR Manager</SelectItem>
                            <SelectItem value="cxo">CXO / Business Leader</SelectItem>
                            <SelectItem value="it-head">IT Head</SelectItem>
                            <SelectItem value="founder">Founder / CEO</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="employees">Number of Employees *</Label>
                        <Select onValueChange={(value) => handleChange('employees', value)}>
                          <SelectTrigger id="employees">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-100">1-100</SelectItem>
                            <SelectItem value="101-500">101-500</SelectItem>
                            <SelectItem value="501-1000">501-1,000</SelectItem>
                            <SelectItem value="1001-2000">1,001-2,000</SelectItem>
                            <SelectItem value="2001-5000">2,001-5,000</SelectItem>
                            <SelectItem value="5000+">5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <Label htmlFor="interest">Primary Interest *</Label>
                      <Select onValueChange={(value) => handleChange('interest', value)}>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="What are you interested in?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ams">Application Management Services (AMS)</SelectItem>
                          <SelectItem value="advisory">HR Advisory Services</SelectItem>
                          <SelectItem value="both">Both AMS and Advisory</SelectItem>
                          <SelectItem value="implementation">New Platform Implementation</SelectItem>
                          <SelectItem value="optimization">Platform Optimization</SelectItem>
                          <SelectItem value="compliance">Compliance Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Tell Us About Your Needs</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        placeholder="Share details about your current HR technology landscape, challenges you're facing, or specific goals you'd like to achieve..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-start gap-4">
                      <Button type="submit" size="lg" className="flex-1">
                        Submit Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy. We will use your information to contact you about our services and may occasionally send relevant insights and updates. You can unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="border-2 border-blue-600">
                <CardContent className="p-6">
                  <h3 className="mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm mb-1">Email</div>
                        <a href="mailto:info@hupulseglobal.com" className="text-blue-600 hover:underline">
                          info@hupulseglobal.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm mb-1">Phone</div>
                        <a href="tel:+15551234567" className="hover:text-blue-600">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm mb-1">Global Headquarters</div>
                        <p className="text-sm text-muted-foreground">
                          United States<br />
                          Serving clients globally
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weekend:</span>
                      <span>Emergency Support Only</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        24/7 support available for Platinum tier clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Stay connected for the latest insights, updates, and thought leadership
                  </p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                <h4 className="mb-2">Fast Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. Urgent requests? Call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations / Global Presence */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Global Presence</h2>
            <p className="text-xl text-muted-foreground">
              Supporting clients worldwide with localized expertise and 24/7 coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'North America', coverage: 'Primary Hub', status: 'Active' },
              { region: 'Europe', coverage: 'Expanding', status: 'Phase B' },
              { region: 'Asia Pacific', coverage: 'Partner Network', status: 'Active' },
              { region: 'Middle East', coverage: 'Coming Soon', status: 'Phase C' }
            ].map((location, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="mb-2">{location.region}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{location.coverage}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    location.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {location.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can you start supporting our HR technology?",
                answer: "Typical onboarding takes 4-6 weeks, including knowledge transfer, team setup, and transition. We can expedite for urgent needs."
              },
              {
                question: "Do you support platforms other than Darwinbox?",
                answer: "Yes! While Darwinbox is our primary partnership, we support Workday, SAP SuccessFactors, Oracle HCM, ADP, and other major HR platforms."
              },
              {
                question: "What's included in your monthly pricing?",
                answer: "Our pricing includes defined support hours, payroll support, compliance monitoring, system health checks, and regular reporting. See our Pricing page for tier details."
              },
              {
                question: "Can we start with AMS and add Advisory later?",
                answer: "Absolutely! Many clients start with AMS to stabilize operations, then layer in Advisory services for strategic optimization and transformation."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We serve IT/SaaS, Manufacturing, Retail, BFSI, Healthcare, and other sectors. Our team has cross-industry expertise with platform-specific certifications."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading enterprises who trust HuPulse Global to turn HR technology complexity into strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
