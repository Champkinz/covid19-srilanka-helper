import React from "react";
import Block from "./block";
import { logo } from "../../img/img";

function Food() {
  return (
    <div className="flex flex-1 flex-wrap justify-around bg-gray-100 mt-4">
      <Block
        title="Keells Super"
        img={logo.keells}
        description="Delivery door step"
        tags={["Essentials"]}
        warning="Website is accessible after 6.00AM"
        website="int.keellssuper.net"
      />
      <Block
        title="GLOMARK"
        img={logo.glomark}
        description="Delivery door step"
        tags={["Essentials", "Non-Essentials"]}
        website="glomark.lk"
      />
      <Block
        title="DONER & DURUM"
        img={logo.donerndurum}
        delivery="Colombo 03 to 07, Kirulapone and Narahenpita"
        tags={["Food"]}
        phone="0779977993"
      />
      <Block
        title="DONER & DURUM"
        img={logo.indulge}
        description="Indulge desserts, delivering your favourite indulge desserts to your doorstep"
        delivery="Colombo 01-10, Battaramulla, Kotte, Nawala, Rajagiriya, Nugegoda, Dehiwala"
        tags={["Food"]}
        phone="0117682314"
      />
      <Block
        title="Asylum Restaurant & Lounge Bar"
        img={logo.asylum}
        delivery="Colombo 01 to 08"
        tags={["Food"]}
        phone="0773601377"
      />
      <Block
        title="Burger King"
        img={logo.burgerKing}
        tags={["Food"]}
        phone="0115123123"
      />
      <Block
        title="Hilton Colombo"
        img={logo.hiltonColombo}
        delivery="Within Colombo"
        tags={["Food"]}
        phone="0768002200"
      />
      <Block
        title="McDonald’s"
        img={logo.mac}
        delivery="Rajagiriya Area"
        tags={["Food"]}
        website="www.mcdelivery.lk/lk/"
        phone="0115555555"
      />
      <Block
        title="Dominos Pizza"
        img={logo.dominos}
        delivery="Borella to Bauddhaloka Mawatha, Maradana to Ridgeway Hospital, Athulkotte to Madiwela, Kalapaluwa to Aggona Junction and Nawala to Narahenpita"
        tags={["Food"]}
        website="pizzaonline.dominoslk.com"
        phone="0117777888"
      />
      <Block
        title="Michaelangelo Pizza"
        img={logo.michaleAng}
        delivery="Colombo 03, 05 - 08, Nawala, Rajigiriya"
        tags={["Food"]}
        website="www.michaelangelo.lk"
        phone="0117612612"
      />
      <Block
        title="Ramada Colombo"
        img={logo.ramada}
        delivery="Colombo 01-13, Mount Lavinia, Rajagiriya"
        tags={["Food"]}
        phone="0766645507"
      />
      <Block
        title="Cafe Kumbuk"
        img={logo.cafeKumbuk}
        delivery="Within Colombo city limits"
        warning="Order via Instagram profile"
        tags={["Food"]}
        phone="0112685310"
      />
      <Block
        title="Chinese Dragon Cafe"
        img={logo.chineseDragon}
        website="www.chinesedragoncafe.com"
        tags={["Food"]}
        phone="0117808080"
      />
      <Block
        title="Barista"
        img={logo.barista}
        delivery="Colombo 02, 03, 05, 06 and 07"
        website="www.barista.lk"
        tags={["Food"]}
        phone="0112677966"
      />
      <Block
        title="Kottu Labs"
        img={logo.kottuLabs}
        delivery="Nawala, Nugegoda (including Delkanda) , Colombo 4, Colombo 5 (including Kirulapone, Hevelock road), Narahenpita, Colombo 6, Pamankada, Colombo 8 (including Borella), Rajagiriya, Battaramulla (upto junction), Mirihana, Kohuwala, Boralesgamuwa, Maharagama, Dehiwala"
        website="www.kottulabs.com"
        tags={["Food"]}
        phone="0776680000"
      />
      <Block
        title="Chola Authentic Indian Restaurant"
        img={logo.chola}
        delivery="Colombo 01-15, Nugegoda, Dehiwala and Mount Lavinia"
        tags={["Food"]}
        phone="0114363118"
      />
      <Block
        title="Dinemore"
        img={logo.dinemore}
        delivery="Colombo 01 to 14 and Dehiwala city limits"
        tags={["Food"]}
        phone="0115661661"
      />
    </div>
  );
}

export default Food;
