"use client"


import Image from "next/image";
import logo from '@/public/assets/images/logo.svg'
import { products } from "@/data/audiophile-data.js";
import { useCart } from "@/app/context/cartContext.jsx"; // adjust path


import Link from "next/link";
import { useState } from "react";
import cart from '@/public/assets/images/cart-contain.png'
import cartIcon from '@/public/assets/images/icon-cart.svg'



export default function Navbar() {

    const { carts, quantity, removeAll, increase, decrease, quantityChange } = useCart();

    const [isOpen, setIsOpen] = useState(false)




    return (
        <div className="indexss">



            {isOpen && (
                <div className="cart-overlay" onClick={() => setIsOpen(false)}>
                </div>
            )}


            {isOpen && (

                <div className={carts.length === 0 ? "cart-container" : "cart-container2"}>


                    {carts.length === 0 ? (
                        <>
                            <span>Your cart is empty</span>
                            <Image src={cart} alt="Empty shopping cart" width={200} />

                        </>
                    ) : (
                        <>
                            <div className="cart-remove">
                                <h3>CART ({quantity})</h3>
                                <span
                                    onClick={removeAll}
                                >
                                    Remove All
                                </span>
                            </div>

                            {carts.map((ccr) => (
                                <div key={ccr.id} className="item-price-quantity">
                                    <div className="item-price">

                                        <Image
                                            src={ccr.thumbnail}
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <div>
                                            <h4>{ccr.subname}</h4>
                                            <span>${ccr.price.toLocaleString()}</span>
                                        </div>


                                    </div>

                                    <div className="item-quantity">
                                        <button
                                            onClick={() => quantityChange(ccr, -1)}
                                        >
                                            -
                                        </button>

                                        <span>{ccr.quantity}</span>

                                        <button
                                            onClick={() => quantityChange(ccr, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="total-price">
                                <span>TOTAL</span>
                                <h2>
                                    ${(carts.reduce(
                                        (total, item) => total + item.price,
                                        0
                                    ) * quantity).toLocaleString()}
                                </h2>
                            </div>

                            <div className="checkout-btn">
                                <Link href="/checkout">
                                    <button className="btn">Checkout</button>
                                </Link>
                            </div>

                        </>
                    )}

                </div>
            )}



            <div className="navbar">



                <Link href={'/'}>
                    <Image
                        src={logo}
                        alt=""
                    />
                </Link>

                <div className="all-links">

                    <Link href={'/'}>
                        <span>HOME</span>
                    </Link>


                    <Link href={'/headphones'}>
                        <span>HEADPHONES</span>
                    </Link>

                    <Link href={'/speakers'}>
                        <span>SPEAKERS</span>
                    </Link>


                    <Link href={'/earphones'}>
                        <span>EARPHONES</span>
                    </Link>

                </div>

                <div onClick={() => setIsOpen(prev => !prev)}
                    className="qty-cartIcon">
                    <span className="qty-cart">{quantity}</span>
                    <Image
                        src={cartIcon}
                        alt=""
                    />
                </div>

            </div>

        </div>
    )

}

