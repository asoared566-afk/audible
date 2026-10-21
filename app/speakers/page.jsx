import Image from "next/image";
import Link from "next/link";
import logo from '@/public/assets/images/logo.svg'
import cartIcon from '@/public/assets/images/icon-cart.svg'
import headphone from '@/public/assets/images/image-headphones.png'
import speaker from '@/public/assets/images/image-speakers.png'
import earphone from '@/public/assets/images/image-earphones.png'
import arrow from '@/public/assets/images/icon-arrow-right.svg'
import speakerZx9 from '@/public/assets/images/image-zx9.jpg'
import person from '@/public/assets/images/image-best-gear.jpg'
import speakerzx7 from '@/public/assets/images/image-zx7.jpg'
import zx9 from '@/public/assets/images/zx9-small.jpg'
import zx7 from '@/public/assets/images/zx7-small.jpg'

import Navbar from "../navbar";

export default function Speakers() {

    return (
        <div className="container">

            <div className="header2">

                <Navbar />

                <h1 className="headphone-link">SPEAKERS</h1>

            </div>

            <main>

                <div className="xx99">

                    <Image
                        src={zx9}
                        alt=""
                        width={400}
                        className="small"
                    />

                    <Image
                        src={speakerZx9}
                        alt=""
                        width={550}
                        className="big"
                    />

                    <div>
                        <span>New Product</span>
                        <h1>ZX9 Speaker</h1>
                        <p>
                            Upgrade your sound system with the all new ZX9 active speaker.
                            It’s a bookshelf speaker system that offers truly wireless connectivity
                            --
                            creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <Link href="/speakers/ZX9-Speaker">
                            <button>SEE PRODUCT</button>
                        </Link>
                    </div>

                </div>

                <div className="xx99">

                     <Image
                        src={zx7}
                        alt=""
                        width={400}
                        className="small"
                    />

                    <div>
                        <h1>ZX7 Speaker</h1>
                        <p>
                            Stream high quality sound wirelessly with minimal to no loss.
                            The ZX7 speaker uses high-end audiophile
                            components that represents the top of the line powered
                            speakers for home or studio use.
                        </p>
                        <Link href="/speakers/ZX7-Speaker">
                            <button>SEE PRODUCT</button>
                        </Link>
                    </div>

                    <Image
                        src={speakerzx7}
                        alt=""
                        width={550}
                        className="big"
                    />

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