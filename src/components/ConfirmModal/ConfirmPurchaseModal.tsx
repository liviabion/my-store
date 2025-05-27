

interface ConfirmPurchaseModalProps {
  show: boolean
  onConfirm: () => void
  onCancel: () => void
  message: string
  success: boolean | null
}

const ConfirmPurchaseModal = ({
  show,
  onConfirm,
  onCancel,
  message,
  success
}: ConfirmPurchaseModalProps) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center space-y-4">
        <h2 className="text-lg font-bold text-dark-blue">Deseja finalizar sua compra?</h2>

        {success !== null && (
          <p
            className={`text-sm font-medium ${
              success ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-light hover:bg-gray text-dark-blue px-4 py-2 rounded text-sm"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="bg-blue hover:bg-dark-blue text-white px-4 py-2 rounded text-sm"
          >
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPurchaseModal
