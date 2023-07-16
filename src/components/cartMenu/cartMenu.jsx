import style from './cartMenu.module.css'

import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu() {
    return (
        <div className={style.menu}>
            <div className={style.options}>
                <CartOption />
                <CartOption />
                <CartOption />
            </div>
            <div className={style.priceline}>
                <h2>Total</h2>
                <h2 className={style.price}>R$ 999,99</h2>
            </div>
        </div>
    )
}