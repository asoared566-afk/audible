import Image from "next/image";
import Link from "next/link";
import logo from '@/public/assets/images/logo.svg'
import cartIcon from '@/public/assets/images/icon-cart.svg'
import headphone from '@/public/assets/images/image-headphones.png'
import speaker from '@/public/assets/images/image-speakers.png'
import earphone from '@/public/assets/images/image-earphones.png'
import arrow from '@/public/assets/images/icon-arrow-right.svg'
import person from '@/public/assets/images/image-best-gear.jpg'
import earphoneyx1 from '@/public/assets/images/image-yx1-earphones.jpg'
import Navbar from "../navbar";

export default function Earphone() {
    return (
        <div className="container">

            <div className="header2">

                <Navbar />


                <h1 className="headphone-link">EARPHONES</h1>

            </div>

            <main>

                <div className="xx99">

                    <Image
                        src={earphoneyx1}
                        alt=""
                        width={550}
                    />

                    <div>
                        <span>New Product</span>
                        <h1>YX1 Wireless Earphones</h1>
                        <p>
                            Tailor your listening experience with bespoke dynamic drivers
                            from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
                            even in noisy environments with its active noise cancellation feature.
                        </p>
                        <Link href={'/earphones/yx1-earphone'}>
                            <button>SEE PRODUCT</button>
                        </Link>

                    </div>

                </div>



                <div className="grids">

                    <div className="contains">
                        <Image
                            className="subject"
                            src={headphone}
                            alt=""
                            width={150}
                        />

                        <div className="product-more">
                            <h3>HEADPHONES</h3>

                            <Link href={'/headphones'}>
                                <div>
                                    <span>SHOP</span>
                                    <Image
                                        src={arrow}
                                        alt=""
                                    />
                                </div>
                            </Link>

                        </div>


                    </div>

                    <div className="contains">
                        <Image
                            src={speaker}
                            alt=""
                            width={150}
                            className="subject"
                        />
                        <div className="product-more">
                            <h3>SPEAKERS</h3>
                            <Link href={'/speakers'}>
                                <div>
                                    <span>SHOP</span>
                                    <Image
                                        src={arrow}
                                        alt=""
                                    />
                                </div>
                            </Link>

                        </div>

                    </div>

                    <div className="contains">
                        <Image
                            src={earphone}
                            alt=""
                            width={150}
                            className="subject"
                        />
                        <div className="product-more">
                            <h3>EARPHONES</h3>

                            <Link href={'/earphones'}>
                                <div>
                                    <span>SHOP</span>
                                    <Image
                                        src={arrow}
                                        alt=""
                                    />
                                </div>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="audio-gear">

                    <div >

                        <h1>
                            Bringing you the <span className="best">best</span> audio gear
                        </h1>

                        <p>
                            Located at the heart of New York City,
                            Audiophile is the premier store for high end headphones,
                            earphones, speakers, and audio accessories.
                            We have a large showroom and luxury demonstration rooms available
                            for you to browse and experience a wide range of our products.
                            Stop by our store to meet some of the fantastic
                            people who make Audiophile the best place to buy your
                            portable audio equipment.
                        </p>

                    </div>

                    <Image
                        src={person}
                        alt=""

                    />


                </div>

            </main>


        </div>
    )
}