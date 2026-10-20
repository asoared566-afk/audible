import Image from "next/image";
import Link from "next/link";
import logo from '@/public/assets/images/logo.svg'
import cartIcon from '@/public/assets/images/icon-cart.svg'
import headphone1 from '@/public/assets/images/image-xx99-mark-two.jpg'
import headphone2 from '@/public/assets/images/image-xx99-mark-one.jpg'
import headphone3 from '@/public/assets/images/image-xx59.jpg'
import headphone from '@/public/assets/images/image-headphones.png'
import speaker from '@/public/assets/images/image-speakers.png'
import earphone from '@/public/assets/images/image-earphones.png'
import arrow from '@/public/assets/images/icon-arrow-right.svg'
import person from '@/public/assets/images/image-best-gear.jpg'
import speakerZx9 from '@/public/assets/images/image-zx9.jpg'

import Navbar from "../navbar";


export default function Headphones() {

    return (
        <div className="container">

            <div className="header2">

                <Navbar />


                <h1 className="headphone-link">HEADPHONES</h1>

            </div>

            <main>

                <div className="xx99">

                    <Image
                        src={headphone1}
                        alt=""
                        width={550}
                    />

                    <div>
                        <span>New Product</span>
                        <h1>XX99 Mark II Headphones</h1>
                        <p>
                            The new XX99 Mark II headphones is the pinnacle
                            of pristine audio. It redefines your premium headphone experience
                            by reproducing the balanced depth and precision
                            of studio-quality sound.
                        </p>
                        <Link href="/headphones/xx99-mark-two">
                            <button>SEE PRODUCT</button>
                        </Link>
                    </div>

                </div>

                <div className="xx99">

                    <div>
                        <h1>XX99 Mark I Headphones</h1>
                        <p>
                            As the gold standard for headphones,
                            the classic XX99 Mark I offers detailed and accurate audio
                            reproduction for audiophiles, mixing engineers,
                            and music aficionados alike in studios and on the go.
                        </p>
                        <Link href="/headphones/xx99-mark-one">
                            <button>SEE PRODUCT</button>
                        </Link>

                    </div>

                    <Image
                        src={headphone2}
                        alt=""
                        width={550}
                    />

                </div>

                <div className="xx99">

                    <Image
                        src={headphone3}
                        alt=""
                        width={550}
                    />

                    <div>
                        <h1>XX59 Headphones</h1>
                        <p>
                            Enjoy your audio almost anywhere and
                            customize it to your specific tastes with
                            the XX59 headphones. The stylish yet durable versatile
                            wireless headset is a brilliant companion at home or on the move.
                        </p>

                        <Link href="/headphones/xx59">
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