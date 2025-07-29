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

  return (
    <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
      pkg.popular ? 'ring-2 ring-purple-500' : ''
    }`}>
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg z-10">
          Más Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {pkg.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">
          {pkg.description}
        </p>
        
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-purple-600">
              {formatPrice(pkg.price)}
            </span>
            {hasDiscount && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(pkg.originalPrice!)}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{pkg.duration}</p>
          {hasDiscount && (
            <p className="text-sm text-green-600 font-semibold">
              ¡Ahorra {formatPrice(savings)}!
            </p>
          )}
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Incluye:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={handleSelect}
          className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 ${
            pkg.popular 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-purple-300' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300'
          }`}
        >
          Quiero esta sesión
        </button>
      </div>
    </div>
  );
};

export default PackageCard;