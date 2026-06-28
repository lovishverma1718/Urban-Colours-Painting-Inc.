import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  pageName: string;
}

export default function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-section-bg border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm font-medium text-body-text">
          <li>
            <Link to="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
            <span className="text-brand-navy font-semibold" aria-current="page">
              {pageName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
