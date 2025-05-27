import { type HeaderProps } from "../../types/HeaderInterface"
import { Link } from "react-router-dom"
import LogoAzul from "../../assets/logo_azul.png"

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Header = ({
  className = "",
  logoWidth = "w-36",
  logoHeight = "h-16",
  linksLeft = [
    { label: "Início", to: "/", icon: <HomeIcon fontSize="small" /> },
    { label: "Conheça a My Store", to: "/sobre", icon: <InfoIcon fontSize="small" /> }
  ],
  linkRight = [
    { label: "Seus pedidos", to: "/pedidos", icon: <ShoppingCartIcon fontSize="small" /> },
    { label: "Seu carrinho", to: "/carrinho", icon: <ShoppingCartIcon fontSize="small" /> }
  ]
}: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-blue shadow-md ${className}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Lado esquerdo: logo + links */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src={LogoAzul}
              alt="Logo da loja"
              className={`${logoWidth} ${logoHeight} object-contain`}
            />
          </Link>
          <nav className="flex items-center gap-6">
            {linksLeft.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 text-soft-white hover:text-white transition"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Lado direito: links */}
        <nav className="flex items-center gap-6">
          {linkRight.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 text-soft-white hover:text-white transition"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
