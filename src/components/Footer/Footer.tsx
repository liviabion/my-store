const Footer = () => {
  return (
    <footer id="footer" className="bg-dark-blue text-soft-white text-center py-10 w-full">
      <div className="text-sm space-y-3">
        <p>© {new Date().getFullYear()} My Store — Todos os direitos reservados.</p>
        <p>Feito com 💙 por Lívia Lima Bion</p>

        <p className="text-s text-gray-light">
          Projeto fictício para fins educacionais. Este site foi construído com React, TypeScript, TailwindCSS e Vite.
        </p>

        <div className="mt-6 text-s text-gray-light space-y-1">
          <p>📦 Estado do carrinho persistido com Local Storage</p>
          <p>🧠 Gerenciamento com Context API + useReducer</p>
          <p>🎨 UI com TailwindCSS + Material Icons</p>
        </div>

        <div className="mt-8 text-xs text-gray-light italic">
          Dados fictícios fornecidos por{" "}
          <a
            href="https://fakestoreapi.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Fake Store API
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
  