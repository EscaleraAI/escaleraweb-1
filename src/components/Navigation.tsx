import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="/images/78f89eb4-6077-448d-8565-bfcc9ce21ad2.png"
              alt="EscaleraAI"
              className="h-10 w-10 rotate-[-2deg]"
            />
            <span className="text-xl font-bold text-foreground">EscaleraAI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('case-studies')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Contact
          </button>
          <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
            Work With Us
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/auth">Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-muted-foreground transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-8 py-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('services');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => {
                scrollToSection('case-studies');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-smooth"
            >
              Case Studies
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </button>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Work With Us
            </Button>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/auth">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}