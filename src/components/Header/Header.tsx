import { type HeaderProps } from "../../types/HeaderInterface"
import { Link } from "react-router-dom"
import LogoAzul from "../../assets/logo_azul.png"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import HistoryIcon from "@mui/icons-material/History"

const Header = ({
  className = "",
  logoWidth = "w-36",
  logoHeight = "h-16",
  linkRight = [
    { label: "Seus pedidos", to: "/pedidos", icon: <HistoryIcon fontSize="small" /> },
    { label: "Seu carrinho", to: "/carrinho", icon: <ShoppingCartIcon fontSize="small" /> }
  ]
}: HeaderProps) => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue via-sober-blue to-dark-blue shadow-md ${className}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Lado esquerdo: logo + links adicionais */}
        <div className="flex items-center gap-8">
          <div>
            <img
              src={LogoAzul}
              alt="Logo da loja"
              className={`${logoWidth} ${logoHeight} object-contain`}
            />
          </div>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-dark-blue hover:underline underline-offset-4 transition text-sm font-semibold"
            >
              Explore
            </Link>
            <button
              onClick={scrollToFooter}
              className="text-dark-blue hover:underline underline-offset-4 transition text-sm font-semibold"
            >
              Sobre o My Store
            </button>
          </nav>
        </div>

        {/* Lado direito: links */}
        <nav className="flex items-center gap-8">
          {linkRight.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 text-white hover:underline underline-offset-4 transition"
            >
              {link.icon}
              <span className="text-sm font-semibold">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
