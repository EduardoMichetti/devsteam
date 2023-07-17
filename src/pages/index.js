// import de bibliotecas
import { useState } from 'react'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { cartState } from '@/atoms/cart'
// import de estilos
import styles from '@/styles/index.module.css'
// import de componentes
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'


export default function Home() {
  const[cart, setCart] = useRecoilState(cartState)

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard 
                image={'league-of-legends.jpg'}
                discount='10%'
                fullPrice='199,90'
                discountPrice='179,91'
                onAdd={() => 
                  handleAddProduct({ name: 'League of Legends', price: 99.9, image: 'league-of-legends.jpg'})
                }
              />
              <SaleCard 
                image={'dota-2.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='139,93'
                onAdd={() => 
                  handleAddProduct({ name: 'Dota 2', price: 99.9, image: 'dota-2.jpg'})
                }
              />
              <SaleCard 
                image={'valorant.jpg'}
                discount='25%'
                fullPrice='199,90'
                discountPrice='149,93'
                onAdd={() => 
                  handleAddProduct({ name: 'Valorant', price: 99.9, image: 'valorant.jpg'})
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard 
                onAdd={() => 
                  handleAddProduct({ name: 'Counter Strike', price: 99.9, image: 'counter-strike.jpg'})
                }
              />

            </div>
          </div>
          
          
        </Container>

      </div>
    </>
  )
}
