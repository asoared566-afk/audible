
import { products } from "@/data/audiophile-data.js";
import Image from "next/image";
import { notFound } from "next/navigation";
import headphone from '@/public/assets/images/image-headphones.png'
import speaker from '@/public/assets/images/image-speakers.png'
import earphone from '@/public/assets/images/image-earphones.png'
import arrow from '@/public/assets/images/icon-arrow-right.svg'
import person from '@/public/assets/images/image-best-gear.jpg'
import Navbar from "../../navbar";
import Link from "next/link";
import AddToCartButton from "../../addtocart";
import yx1 from '@/public/assets/images/yx1-small.jpg'
export const dynamic = 'force-dynamic';




export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div>

      <Navbar />

      <main>

        <Link href={'/earphones'}>
          <span className="go-back">GO BACK</span>
        </Link>

        <div className="xx99">


          <Image
            src={product.small}
            alt=""
            width={400}
            height={200}
            className="small"
          />

          <Image
            src={product.image}
            alt=""
            width={550}
            height={550}
            className="big"
          />

          <div>
            <span className="new">New Product</span>
            <h1>{product.name}</h1>
            <p>
              {product.description}
            </p>
            <h3>${(product.price).toLocaleString()}</h3>
            <AddToCartButton product={product} />
          </div>

        </div>

        <div className="feature-box">

          <div className="feature">
            <h1>FEATURES</h1>
            <span>{product.features}</span>
          </div>

          <div className="box">
            <h1>IN THE BOX</h1>
            <div className="quantity-item">
              {product.includes.map(include => (
                <span key={include.id}>{include.quantity}x <span>{include.item}</span> </span>
              ))}

            </div>
          </div>

        </div>

        <div className="gallery">

          <div>
            <Image
              src={product.gallery[0]}
              alt=""
              width={180}
              height={110}
              className="small"
            />

            <Image
              src={product.gallery[0]}
              alt=""
              width={450}
              height={280}
              className="big"
            />

            <Image
              src={product.gallery[1]}
              alt=""
              width={180}
              height={110}
              className="small"
            />


            <Image
              src={product.gallery[1]}
              alt=""
              width={450}
              height={280}
              className="big"
            />

          </div>

          <Image
            src={product.gallery[2]}
            alt=""
            width={240}
            height={243}
            className="small"
          />

          <Image
            src={product.gallery[2]}
            alt=""
            width={650}
            height={582}
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
  );
}