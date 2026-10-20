"use client"

import Image from "next/image";
import logo from '@/public/assets/images/logo.svg'
import cartIcon from '@/public/assets/images/icon-cart.svg'
import headset from '@/public/assets/images/artworks-2IZNTGOsmk7sMHRT-Y4i0yw-t1080x1080.jpg'
import headphone from '@/public/assets/images/image-headphones.png'
import speaker from '@/public/assets/images/image-speakers.png'
import earphone from '@/public/assets/images/image-earphones.png'
import arrow from '@/public/assets/images/icon-arrow-right.svg'
import speakerZx9 from '@/public/assets/images/image-speaker-zx9.png'
import speakerZx7 from '@/public/assets/images/image-speaker-zx7.jpg'
import earphoneYx1 from '@/public/assets/images/image-earphones-yx1.jpg'
import person from '@/public/assets/images/image-best-gear.jpg'
import cart from '@/public/assets/images/cart-contain.png'
import Navbar from '@/app/navbar.jsx'



import { useState } from "react";

import Link from "next/link";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container">


      <header>

        <Navbar />

        <div className="new-product">

          <div className="product-img">
            <span className="new">New Product</span>

            <h1>XX99 Mark II Headphones</h1>

            <p className="mytext">
              Experience natural, lifelike audio and exceptional build
              quality made for the passionate music enthusiast.
            </p>

            <Link href="/headphones/xx99-mark-two">
              <button>SEE PRODUCT</button>
            </Link>

          </div>

          <Image
            src={headset}
            alt=""
          />


        </div>

      </header>

      <main className="main-body">

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

        <div className="speaker-zx9">

          <Image
            src={speakerZx9}
            alt=""
            width={400}
          />

          <div className="zx9">
            <h1>ZX9 Speaker</h1>

            <p>
              Upgrade to premium speakers that are phenomenally
              built to deliver truly remarkable sound.
            </p>

            <Link href="/speakers/ZX9-Speaker">
              <button>SEE PRODUCT</button>
            </Link>
          </div>

        </div>

        <div className="speaker-zx7">

          <Image
            src={speakerZx7}
            alt=""
            className="zx7"
          />

          <div className="product-zx7">
            <h1>ZX7 SPEAKER</h1>
            <Link href="/speakers/ZX7-Speaker">
              <button>SEE PRODUCT</button>
            </Link>
          </div>

        </div>

        <div className="earphones-yx1">

          <Image
            src={earphoneYx1}
            alt=""
          />

          <div className="yx1">
            <h1>YX1 EARPHONES</h1>
            <Link href={'/earphones/yx1-earphone'}>
              <button>SEE PRODUCT</button>
            </Link>
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
  );
}
