import React from 'react';
import Navbar from 'components/navbar';
import { ReactComponent as ImgWorkingAnywhere } from 'assets/images/working-anywhere.svg';

import { ReactComponent as ImgUserAdd } from 'assets/images/user-add.svg';

import { ReactComponent as ImgShield } from 'assets/images/shield.svg';

import { ReactComponent as ImgEmogiHappy } from 'assets/images/emogi-happy.svg';

import { ReactComponent as ImgNewNotifications } from 'assets/images/new-notifications.svg';

import { ReactComponent as ImgGooglePlay } from 'assets/images/google-play.svg';

import { ReactComponent as ImgAppleStore } from 'assets/images/apple-store.svg';

import Button from 'components/button';
const Index: React.FC = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <section className='apresentation'>
        <div>
          <h1>
            Rachi, <br /> é tudo que você <br />
            precisa em um só lugar
          </h1>
          <Button className='mt-66'>Cadastre-se</Button>
        </div>
        <ImgWorkingAnywhere />
      </section>
      <section className='how-works'>
        <h2>Como funciona</h2>
        <div className='wrapper'>
          <div>
            <ImgUserAdd className='svg-icon' />
            <h5>Crie conexões</h5>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
          <div>
            <ImgShield className='svg-icon' />
            <h5>100% gratuito</h5>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
          <div>
            <ImgEmogiHappy className='svg-icon' />
            <h5>Compartilhamento</h5>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consecteteu.
            </p>
          </div>
        </div>
      </section>

      <section className='download'>
        <div>
          <h3>Baixe nosso app para desfrutar mais!</h3>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
          <span>
            <ImgGooglePlay className='svg-button' />
            <ImgAppleStore className='svg-button' />
          </span>
        </div>
        <ImgNewNotifications />
      </section>

      <section className='plans'>
        <h2>Nossos Planos</h2>
        <p className='subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
        <div className='wrapper_cards'>
          <div className='card'>
            <h4>Bronze</h4>
            <div>
              <sup>R$</sup>
              <span>28</span>
              /mês
            </div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>
            <Button className=''>Assinar</Button>
          </div>
          <div className='card'>
            <h4>Prata</h4>
            <div>
              <sup>R$</sup>
              <span>5</span>
              /mês
            </div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>
            <Button className=''>Assinar</Button>
          </div>
          <div className='card'>
            <h4>Outro</h4>
            <div>
              <sup>R$</sup>
              <span>94</span>
              /mês
            </div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>
            <Button className=''>Assinar</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
