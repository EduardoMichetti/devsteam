import Image from 'next/image'

import style from './cartOption.module.css'

export default function CartOption() {
    return(
        <div className={style.option}>
            <Image src={`/products/league-of-legends.jpg`} width={62} height={74}/>
            <div className={style.info}>
                <h3 className={style.title}>League of legeds</h3>
                <h3 className={style.price}>R$ 99,90</h3>
                <p className={style.remove}>Remover</p>
            </div>
        </div>
    )
}