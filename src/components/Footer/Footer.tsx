const Footer = () => {
  return (
    <footer className="bg-dark-blue text-soft-white text-center py-4 w-full">
      <div className="text-sm space-y-1">
        <p>© {new Date().getFullYear()} My Store — Todos os direitos reservados.</p>
        <p>Feito com 💙 por Lívia Lima Bion</p>
        <p className="text-xs text-gray-light">Projeto fictício para fins educacionais.</p>
      </div>
    </footer>
  )
}

export default Footer
