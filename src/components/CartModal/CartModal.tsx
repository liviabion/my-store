import { Link } from "react-router-dom"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

interface CartModalProps {
  show: boolean
  onClose: () => void
}

const CartModal = ({ show, onClose }: CartModalProps) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center space-y-4">
        <CheckCircleIcon className="text-green-muted" style={{ fontSize: 40 }} />
        <h2 className="text-lg font-semibold text-green-muted">Produto adicionado com sucesso!</h2>

        <div className="flex justify-center gap-3">
          <Link
            to="/"
            onClick={onClose}
            className="bg-sober-blue hover:bg-dark-blue text-white px-4 py-2 rounded text-sm transition"
          >
            Voltar às compras
          </Link>

          <Link
            to="/carrinho"
            className="bg-sober-blue hover:bg-dark-blue text-white px-4 py-2 rounded text-sm transition"
          >
            Ver carrinho
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartModal
