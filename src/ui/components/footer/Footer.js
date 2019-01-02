import React from 'react';

import './Footer.css';

import { Blockquote, Container } from '../index';

import imgFacebook from './../../components/assets/redes-sociais/facebook.png';
import imgInstagram from './../../components/assets/redes-sociais/instagram.png';
import imgTwitter from './../../components/assets/redes-sociais/twitter.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className="footer-msg">
          <Container>
            <Blockquote
              mensagem="o verdadeiro segredo da felicidade está em ter um
              genuíno interesse por todos os detalhes da vida
              cotidiana."
              autor="WILLIAM MORRIS"
            />
          </Container>
        </section>
        <footer>
          <div className="footer">
            <Container>
              <div className="grid-8 footer-historia">
                <h3>Nossa História</h3>
                <p>
                  Quando iniciamos a Bikcraft queriamos apenas um produto que
                  adoraríamos utilizar. Eramos apaixonados por pedalar e também
                  por fazer as coisas com as nossas próprias mãos. Assim surgiu
                  um sonho na garagem da nossa casa.
                </p>
              </div>
              <div className="grid-4 footer-contato">
                <h3>Contato</h3>
                <ul>
                  <li>- +55 21 9999-9999</li>
                  <li>- contato@bikcraft.com</li>
                  <li>- Rua Ali Perto - Botafogo</li>
                </ul>
              </div>
              <div className="grid-4 footer-rede-social">
                <h3>Redes Sociais</h3>
                <ul>
                  <li>
                    <a href="https://facebook.com" target="_black">
                      <img src={imgFacebook} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_black">
                      <img src={imgInstagram} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_black">
                      <img src={imgTwitter} alt="Twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
          <div className="footer-copy">
            <Container>
              <div className="grid-16">
                Bikcraft 2018 - Alguns direitos reservados.
              </div>
            </Container>
          </div>
        </footer>
      </div>
    );
  }
}
