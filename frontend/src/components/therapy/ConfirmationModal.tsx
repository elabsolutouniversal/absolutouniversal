import { ConfirmationModalProps } from "@/types/therapy.types";
import { formatPrice } from "@/utils/therapy.utils";

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  isOpen, 
  selectedPackage, 
  onClose, 
  onConfirm 
}) => {
  if (!isOpen || !selectedPackage) return null;

  const handleConfirm = (): void => {
    onConfirm(selectedPackage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 transform transition-all">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Excelente elección!
        </h3>
        
        <div className="mb-4 space-y-2">
          <p className="text-gray-600">
            <strong>Terapia:</strong> {selectedPackage.therapyName}
          </p>
          <p className="text-gray-600">
            <strong>Paquete:</strong> {selectedPackage.name}
          </p>
          <p className="text-gray-600">
            <strong>Precio:</strong> {formatPrice(selectedPackage.price)}
          </p>
          <p className="text-gray-600">
            <strong>Duración:</strong> {selectedPackage.duration}
          </p>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">
          Te contactaremos pronto para coordinar tu sesión.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cerrar
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;