import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src="Logo.png" alt="" />
            <div className='divvv'>
              <button className='pruple'><img src="icon.png" alt="" /> Porto Alegre, RS</button>
              <img src="Cart.png" alt="" />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className='mainPro_max'>
          <div className="container">
            <div className="parent">
              <div className="box1">
                <h1 className='h1Main'>Encontre o café perfeito para qualquer hora do dia</h1>
                <p className='pMain'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="box3">
                  <div>
                    <div className="mainFlex">
                      <img src="icon (1).png" alt="" /><p>Compra simples e segura</p>
                    </div>
                    <div className="mainFlex1">
                      <img src="icon (3).png" alt="" /><p>Entrega rápida e rastreada</p>
                    </div>
                  </div>
                  <div>
                    <div className="mainFlex">
                      <img src="icon (2).png" alt="" /><p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className="mainFlex1">
                      <img src="icon (4).png" alt="" /><p>O café chega fresquinho até você</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box2">
                <img src="imagem (1).png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='cart'>
          <div className="container">
            <h1 className='tittle-h1'>Nossos cafés</h1>
            <div className='paren-card'>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="coffee-card">
                <div class="image-container">
                  <img src="image.png" alt="" />
                </div>

                <span class="tag">TRADICIONAL</span>

                <h2 class="title">Expresso Tradicional</h2>
                <p class="description">O tradicional café feito com água quente e grãos moídos</p>

                <div class="card-footer">
                  <div class="price">
                    <span class="currency">R$</span>
                    <span class="amount">9,90</span>
                  </div>

                  <div class="actions">
                    <div class="counter">
                      <button class="minus">−</button>
                      <span class="count">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="cart-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
