import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from "../../assets/kite.png";
import coin from "../../assets/coin.png";
import varsity from "../../assets/varsity.png";
import console from "../../assets/console.png";
import kiteconnect from "../../assets/kiteconnect.png";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={kite}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"Try Demo"}
        learnMore={"Learn Demo"}
        googlePlay={""}
        appStore={""}
      />

      <RightSection
        imageURL={console}
        productName={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"Learn More"}
      />

      <LeftSection
        imageURL={coin}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={"Coin"}
        googlePlay={""}
        appStore={""}
      />

      <RightSection
        imageURL={kiteconnect}
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={"Kite Connect"}
      />

      <LeftSection
        imageURL={varsity}
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlay={""}
        appStore={""}
      />
      <p className="text-center mt-2 mb-3 fs-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
};

export default ProductPage;
