import { Link } from 'react-router-dom';
import { Mail, LogIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm xs:text-xs text-muted-foreground">
            © 2024 by Razak. All rights reserved.
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              to="/contactus"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;