import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HP</span>
              </div>
              <div>
                <div className="font-semibold text-white">HuPulse Global</div>
                <div className="text-xs text-slate-400">HR Technology & Advisory</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Transforming HR operations into strategic growth engines through technology, expertise, and dedicated support.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'How We Work', 'Pricing'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400">Application Management</li>
              <li className="text-sm text-slate-400">HR Advisory</li>
              <li className="text-sm text-slate-400">Payroll & Compliance</li>
              <li className="text-sm text-slate-400">HR Technology Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hupulseglobal.com" className="hover:text-white transition-colors">
                  info@hupulseglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} HuPulse Global. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-sm text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
