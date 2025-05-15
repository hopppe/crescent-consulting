import Link from 'next/link';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-primary py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Crescent Consulting</h3>
            <p className="text-gray-700 mb-4 text-base">
              Independent consultants offering tailored advisory services across the UK, US, and the Middle East.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-gray-700 hover:text-secondary transition-colors text-base">
                  Marketing and Branding
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-700 hover:text-secondary transition-colors text-base">
                  Structural and Financial
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-700 hover:text-secondary transition-colors text-base">
                  Sales Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-700 hover:text-secondary transition-colors text-base">
                  General Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-2 min-w-[20px] text-accent" />
                <a 
                  href="mailto:contact@crescentconsulting.co" 
                  className="text-gray-700 hover:text-secondary transition-colors text-base"
                >
                  contact@crescentconsulting.co
                </a>
              </li>
              <li className="flex items-center">
                <FiLinkedin className="mr-2 min-w-[20px] text-accent" />
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-secondary transition-colors text-base"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {currentYear} Crescent Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 