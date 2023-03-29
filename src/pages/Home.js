import React from "react";
import BlackFriday from "../components/BlackFriday";
import CatCard from "../components/CatCard";
import Categories from "../components/Categories";
import Deal from "../components/Deal";
import Footer2 from "../components/Footer2";
import FridayCard from "../components/FridayCard";
import Hero from "../components/Hero";
import Reccomended from "../components/Reccomended";
import SlideComponent from "../components/SlideComponent";
import { cards, gigs } from "../data";

const Home = () => (
  <div>
    <Hero />
    <SlideComponent name="New Arrival" slidesToShow={5} arrowsScroll={5}>
      {cards.map((card) => (
        <CatCard key={card.id} items={card} />
      ))}
    </SlideComponent>
    <Deal />
    <Categories />
    <SlideComponent
      name="Products under N10,0000"
      slidesToShow={5}
      arrowsScroll={5}
    >
      {cards.map((card) => (
        <CatCard key={card.id} items={card} />
      ))}
    </SlideComponent>
    <BlackFriday />
    <Reccomended />
    <Footer2 />
  </div>
);

export default Home;
