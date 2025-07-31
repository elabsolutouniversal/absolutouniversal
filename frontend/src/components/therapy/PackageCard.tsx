import { useCallback } from "react";
import { PackageCardProps } from "@/types/therapy.types";
import { calculateSavings, formatPrice } from "@/utils/therapy.utils";

const PackageCard: React.FC<PackageCardProps> = ({ 
  package: pkg, 
  therapyName, 
  therapyId,
  onSelect 
}) => {
  const hasDiscount = Boolean(pkg.originalPrice && pkg.originalPrice > pkg.price);
  const savings = calculateSavings(pkg.originalPrice, pkg.price);

  const handleSelect = useCallback((): void => {
    onSelect(pkg, therapyName, therapyId);
  }, [pkg, therapyName, therapyId, onSelect]);

  // Simple check icon matching the design
  const CheckIcon = () => (
    <span className="text-blue-500 text-lg">✓</span>
  );

  return (
    <div className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
      pkg.popular ? 'ring-2 ring-blue-500' : 'border border-gray-200'
    }`}>
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
          RECOMENDADO
        </div>
      )}
      
      <div className="p-6">
        {/* Icon circle at top */}
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
          pkg.popular ? 'bg-blue-600' : 'bg-gray-200'
        }`}>
          {/* You can add different icons here based on package type if needed */}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
          {pkg.name}
        </h3>
        
        {/* Duration */}
        <p className="text-sm text-gray-500 text-center mb-4">
          {pkg.duration}
        </p>
        
        {/* Price section */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-3xl font-bold text-blue-600">
              {formatPrice(pkg.price)}
            </span>
            {hasDiscount && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(pkg.originalPrice!)}
              </span>
            )}
          </div>
          {hasDiscount && (
            <p className="text-sm text-green-600 mt-1">
              ¡Ahorra {formatPrice(savings)}!
            </p>
          )}
        </div>
        
        {/* Includes section */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 text-center mb-3">
            INCLUYE:
          </p>
          <ul className="space-y-2">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={handleSelect}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            pkg.popular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Reservar ahora
        </button>
      </div>
    </div>
  );
};

export default PackageCard;