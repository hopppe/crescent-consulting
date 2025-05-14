import Link from 'next/link';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Crescent Consulting</h3>
            <p className="text-white mb-4 opacity-90 text-base">
              Independent consultants offering tailored advisory services across the UK, US, and the Middle East.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-white hover:text-muted-foreground transition-colors text-base">
                  Marketing and Branding
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white hover:text-muted-foreground transition-colors text-base">
                  Structural and Financial
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white hover:text-muted-foreground transition-colors text-base">
                  Sales Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white hover:text-muted-foreground transition-colors text-base">
                  General Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-2 min-w-[20px]" />
                <a 
                  href="mailto:contact@crescentconsulting.co" 
                  className="text-white hover:text-muted-foreground transition-colors text-base"
                >
                  contact@crescentconsulting.co
                </a>
              </li>
              <li className="flex items-center">
                <FiLinkedin className="mr-2 min-w-[20px]" />
                <a 
                  href="#" 
                  className="text-white hover:text-muted-foreground transition-colors text-base"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light text-center text-white opacity-80">
          <p>&copy; {currentYear} Crescent Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 