
"use client";
import Navbar from "../navbar"
import { useState } from "react";
import { useCart } from "@/app/context/cartContext.jsx"; // adjust path
import { products } from "@/data/audiophile-data.js";
import Image from "next/image";
import check from '@/public/assets/images/icon-check-mark.svg'
import Link from "next/link";




export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("emoney");
    const { carts, quantity, setCarts, setQuantity } = useCart();

    const [isOpen, setIsOpen] = useState(false)

    function backToHome() {
        setCarts([])
        setIsOpen(false)
        setQuantity(0)
    }


    return (
        <>

            {isOpen && (
                <div className="cart-overlay" onClick={() => setIsOpen(false)}>
                </div>
            )}

            {isOpen && (
                <div className="confirmation">
                    <Image
                        src={check}
                        alt=""
                        width={70}
                        height={70}
                    />

                    <h1>Thank you for your order</h1>

                    <span>You will receive an email confirmation shortly.</span>

                    <Link href={'/'}>
                        <button onClick={backToHome}>BACK TO HOME</button>
                    </Link>

                </div>
            )}


            <div>
                <Navbar />

                <main className="checkout-page">
                    <div className="checkout-container">

                        <div className="checkout-layout">
                            <form className="checkout-form">
                                <h1>Checkout</h1>

                                <section className="form-section">
                                    <h2>Billing Details</h2>

                                    <div className="form-grid">
                                        <div className="form-field">
                                            <label htmlFor="name">Name</label>
                                            <input id="name" type="text" placeholder="Alexei Ward" />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="email">Email Address</label>
                                            <input id="email" type="email" placeholder="alexei@mail.com" />
                                        </div>

                                        <div className="form-field full-width">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input id="phone" type="tel" placeholder="+1 202-555-0136" />
                                        </div>
                                    </div>
                                </section>

                                <section className="form-section">
                                    <h2>Shipping Info</h2>

                                    <div className="form-grid">
                                        <div className="form-field full-width">
                                            <label htmlFor="address">Your Address</label>
                                            <input id="address" type="text" placeholder="1137 Williams Avenue" />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="zip">ZIP Code</label>
                                            <input id="zip" type="text" placeholder="10001" />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="city">City</label>
                                            <input id="city" type="text" placeholder="New York" />
                                        </div>

                                        <div className="form-field full-width">
                                            <label htmlFor="country">Country</label>
                                            <input id="country" type="text" placeholder="United States" />
                                        </div>
                                    </div>
                                </section>

                                <section className="form-section">
                                    <h2>Payment Details</h2>

                                    <div className="payment-options">
                                        <span className="payment-label">Payment Method</span>

                                        <label className="payment-option">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="emoney"
                                                checked={paymentMethod === "emoney"}
                                                onChange={() => setPaymentMethod("emoney")}
                                            />
                                            e-Money
                                        </label>

                                        <label className="payment-option">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="cod"
                                                checked={paymentMethod === "cod"}
                                                onChange={() => setPaymentMethod("cod")}
                                            />
                                            Cash on Delivery
                                        </label>
                                    </div>

                                    {paymentMethod === "emoney" && (
                                        <div className="form-grid payment-fields">
                                            <div className="form-field">
                                                <label htmlFor="emoney">e-Money Number</label>
                                                <input id="emoney" type="text" placeholder="238521993" />
                                            </div>

                                            <div className="form-field">
                                                <label htmlFor="pin">e-Money PIN</label>
                                                <input id="pin" type="password" placeholder="6891" />
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </form>

                            <aside className="summary-card">
                                <h2>Summary</h2>

                                {carts.length === 0 ? (<div className="empty-cart">No Items in cart</div>)
                                    : (
                                        carts.map(cart => (
                                            <div className="cart-items" key={cart.id}>
                                                <div className="item-price">

                                                    <Image
                                                        src={cart.thumbnail}
                                                        alt=""
                                                        width={80}
                                                        height={80}
                                                    />
                                                    <div>
                                                        <h4>{cart.subname}</h4>
                                                        <span>${cart.price.toLocaleString()}</span>
                                                    </div>


                                                </div>
                                                <span>x{cart.quantity}</span>
                                            </div>
                                        ))
                                    )}


                                <div className="summary-row">
                                    <span>Total</span>
                                    <strong>${(carts.reduce(
                                        (total, item) => total + item.price,
                                        0
                                    ) * quantity).toLocaleString()}
                                    </strong>
                                </div>

                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <strong>$0</strong>
                                </div>

                                <div className="summary-row grand-total">
                                    <span>Grand Total</span>
                                    <strong>${(carts.reduce(
                                        (total, item) => total + item.price,
                                        0
                                    ) * quantity).toLocaleString()}
                                    </strong>
                                </div>

                                <button onClick={() => setIsOpen(true)} className="pay-button" type="button">
                                    Continue &amp; Pay
                                </button>
                            </aside>
                        </div>
                    </div>
                </main>
            </div>
        </>




    );
}