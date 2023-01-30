import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.png';
import cart from '../../assets/img/cart.png';

import "./styles.scss";

export default function Header() {
  return (
    <header className="header header-top">
        <section className="header-top__logo">
            <img src={logo} alt="Digital Store" title="Logomarca do sistema"/>
        </section>
        <section className="header-top__search">
            <form action="#" method="get">
                <input type="text" name="s" placeholder="Pesquisar produto..."/>
                <button>
                    <img src={search} alt="Lupa" title="Pesquisar"/>
                </button>
            </form>
        </section>
        <section className="header-top__links">
            <a href="#">Cadastre-se</a>
            <a href="#">Entrar</a>
        </section>
        <section className="header-top__cart">
            <a href="#" data-value="2">
                <img src={cart} alt="Carrinho" title="Carrinho"/>
            </a>
        </section>
    </header>
  );
}
