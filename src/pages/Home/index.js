import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2019-12-06/2592_Trio3.jpg"
          alt="Tenis"
        />
        <strong>Tenis teste</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
