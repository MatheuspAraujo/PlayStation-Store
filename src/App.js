import "./styles.css";

import Header from "./components/Header";
import NewGame from "./components/NewGame";
import Trending from "./components/Trending";
import TrendingList from "./components/Trending-List";

import ReleasesCards from "./components/ReleasesCards";
import PlaystationNow from "./components/PlaystationNow";
import Sales from "./components/Sales";
import PlaystationPlus from "./components/PlaystationPlus";

import Collections from "./components/Collections";
import Genres from "./components/Genres";
import More from "./components/More";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <NewGame />
      <Trending title="Trending" />
      <TrendingList
        imageLogo1="./assets/trending/ps4 logo.png"
        trendingImage1="./assets/trending/trending img 1.png"
        title1="Fall Guys: Ultimate Knockout"
        price1="$19.99"
        /* */
        imageLogo2="./assets/trending/ps5 logo.png"
        trendingImage2="./assets/trending/trending img 2.png"
        title2="Demon's Souls"
        price2="$69.99"
        /* */
        imageLogo3="./assets/trending/ps4 logo.png"
        trendingImage3="./assets/trending/trending img 3.png"
        title3="Call of Duty®: Black Ops Cold War"
        price3="$59.99"
      />

      <Trending title="New Releases" />

      <ReleasesCards
        imageGame="./assets/releases/Cyberpunk.png"
        titleGame="Cyberpunk 2077"
        subtitleGame="WB Games / CD Project Red"
        psGame="./assets/releases/ps4 logo releases.png"
        priceGame="$59.99"
        /* */
        imageGame2="./assets/releases/Hitman.png"
        titleGame2="Hitman III"
        subtitleGame2="IO Interactive"
        psGame2="./assets/releases/ps4 logo releases.png"
        priceGame2="$59.99"
        /* */
        imageGame3="./assets/releases/Destruction Allstars.png"
        titleGame3="Destruction Allstars"
        subtitleGame3="SIE / Lucid Games"
        psGame3="./assets/releases/ps5 logo releases.png"
        priceGame3="$69.99"
        /* */
        imageGame4="./assets/releases/Godfall.png"
        titleGame4="Godfall"
        subtitleGame4="Gearbox / Counterplay Games"
        psGame4="./assets/releases/ps5 logo releases.png"
        priceGame4="$49.99"
        /* */
        imageGame5="./assets/releases/FIFA 21.png"
        titleGame5="FIFA 21"
        subtitleGame5="EA Sports"
        psGame5="./assets/releases/ps4 logo releases.png"
        priceGame5="$39.99"
        /* */
        imageGame6="./assets/releases/GhostOfTsushima.png"
        titleGame6="Ghost Of Tsushima"
        subtitleGame6="SIE / Sucker Punch"
        psGame6="./assets/releases/ps4 logo releases.png"
        priceGame6="PURCHASED"
      />
      <ReleasesCards
        imageGame="./assets/releases/Watch Dogs Legion.png"
        titleGame="Watch Dogs Legion"
        subtitleGame="Ubisoft"
        psGame="./assets/releases/ps4 logo releases.png"
        priceGame="$59.99"
        /* */
        imageGame2="./assets/releases/Cloudpunk.png"
        titleGame2="Cloudpunk"
        subtitleGame2="Maple Whispering / Ion Lands"
        psGame2="./assets/releases/ps4 logo releases.png"
        priceGame2="$19.99"
        /* */
        imageGame3="./assets/releases/Crysis Remastered.png"
        titleGame3="Crysis Remastered.png"
        subtitleGame3="Crytek"
        psGame3="./assets/releases/ps4 logo releases.png"
        priceGame3="$29.99"
        /* */
        imageGame4="./assets/releases/Far Cry 6.png"
        titleGame4="Far Cry 6"
        subtitleGame4="Ubisoft"
        psGame4="./assets/releases/ps5 logo releases.png"
        priceGame4="$59.99"
        /* */
        imageGame5="./assets/releases/This Is The Zodiac Spea.png"
        titleGame5="This Is The Zodiac Spea"
        subtitleGame5="Klabater / Punch Punk Games"
        psGame5="./assets/releases/ps4 logo releases.png"
        priceGame5="$16.99"
        /* */
        imageGame6="./assets/releases/NBA 2K21.png"
        titleGame6="NBA 2K21"
        subtitleGame6="2K Sports / Visual Concepts"
        psGame6="./assets/releases/ps4 logo releases.png"
        priceGame6="$46.99"
      />

      <PlaystationNow
        imageBG="./assets/psNow/psNow.png"
        imageGame="./assets/psNow/game psnow.png"
        imagePsnow="./assets/psNow/PlaystationNow.png"
        Psnow="Hundreds of incredible games on demand, what will play first?"
      />

      <Trending title="Coming Soon" />

      <ReleasesCards
        imageGame="./assets/comingsoon/Devil May Cry V Special.png"
        titleGame="Devil May Cry V Special"
        subtitleGame="Capcom"
        psGame="./assets/releases/ps5 logo releases.png"
        priceGame="$30.00"
        /* */
        imageGame2="./assets/comingsoon/Assassin's Creed Valhalla.png"
        titleGame2="Assassin's Creed"
        subtitleGame2="Ubisoft"
        psGame2="./assets/releases/ps4 logo releases.png"
        priceGame2="$59.99"
        /* */
        imageGame3="./assets/comingsoon/Need For Speed Hot Pur.png"
        titleGame3="Need For Speed"
        subtitleGame3="EA"
        psGame3="./assets/releases/ps4 logo releases.png"
        priceGame3="$29.99"
        /* */
        imageGame4="./assets/comingsoon/Dark Pictures Little Ho.png"
        titleGame4="Dark Pictures Little"
        subtitleGame4="Bandai Namco / Supermassive"
        psGame4="./assets/releases/ps4 logo releases.png"
        priceGame4="$29.99"
        /* */
        imageGame5="./assets/comingsoon/Dead by Daylight STRA.png"
        titleGame5="Dead by Daylight STRA"
        subtitleGame5="Starbreeze / Behaviour"
        psGame5="./assets/releases/ps4 logo releases.png"
        priceGame5="$7.99"
        /* */
        imageGame6="./assets/comingsoon/Sackboy A Big Adventu.png"
        titleGame6="Sackboy A Big Adventu"
        subtitleGame6="SIE / Sumo Digital"
        psGame6="./assets/releases/ps5 logo releases.png"
        priceGame6="$56.99"
      />

      <Trending title="Sales & Deals" />

      <Sales />

      <ReleasesCards
        imageGame="./assets/sales/Death Stranding.png"
        titleGame="Death Stranding"
        subtitleGame="SIE / Kojima Productions"
        psGame="./assets/releases/ps4 logo releases.png"
        priceGame="$29.99"
        /* */
        imageGame2="./assets/sales/Days Gone.png"
        titleGame2="Days Gone"
        subtitleGame2="SIE / Bend Studio"
        psGame2="./assets/releases/ps4 logo releases.png"
        priceGame2="$19.99"
        /* */
        imageGame3="./assets/sales/Diablo III Eternal Collec....png"
        titleGame3="Diablo III Eternal"
        subtitleGame3="Blizzard Entertainment"
        psGame3="./assets/releases/ps4 logo releases.png"
        priceGame3="$19.79"
        /* */
        imageGame4="./assets/sales/Mortal Shell.png"
        titleGame4="Mortal Shell.png"
        subtitleGame4="PlayStack / Cold Symmetry "
        psGame4="./assets/releases/ps4 logo releases.png"
        priceGame4="$25.49"
        /* */
        imageGame5="./assets/sales/DOOM Eternal.png"
        titleGame5="DOOM Eternal.png"
        subtitleGame5="Bethesda / id Software"
        psGame5="./assets/releases/ps4 logo releases.png"
        priceGame5="$29.99"
        /* */
        imageGame6="./assets/sales/The Witcher 3 Wild Hu.png"
        titleGame6="The Witcher 3"
        subtitleGame6="WB Games / CD Project Red"
        psGame6="./assets/releases/ps4 logo releases.png"
        priceGame6="$14.99"
      />

      <Trending title="Free to Play" />

      <ReleasesCards
        imageGame="./assets/free/Rogue Company.png"
        titleGame="Rogue Company"
        subtitleGame="Hi-Rez Studios / First Watch"
        psGame="./assets/releases/ps4 logo releases.png"
        priceGame="DOWNLOAD"
        /* */
        imageGame2="./assets/free/Fortnite.png"
        titleGame2="Fortnite"
        subtitleGame2="Epic Games"
        psGame2="./assets/releases/ps5 logo releases.png"
        priceGame2="DOWNLOAD"
        /* */
        imageGame3="./assets/free/Genshin Impact.png"
        titleGame3="Genshin Impact"
        subtitleGame3="miHoYo"
        psGame3="./assets/releases/ps4 logo releases.png"
        priceGame3="DOWNLOAD"
        /* */
        imageGame4="./assets/free/Rocket Lague.png"
        titleGame4="Rocket Lague"
        subtitleGame4="Epic Games / Psyonix"
        psGame4="./assets/releases/ps4 logo releases.png"
        priceGame4="DOWNLOAD"
        /* */
        imageGame5="./assets/free/Call of Duty® Warzone.png"
        titleGame5="Call of Duty® Warzone"
        subtitleGame5="Activision"
        psGame5="./assets/releases/ps4 logo releases.png"
        priceGame5="DOWNLOAD"
        /* */
        imageGame6="./assets/free/Apex Legends.png"
        titleGame6="Apex Legends"
        subtitleGame6="EA / Respawn"
        psGame6="./assets/releases/ps4 logo releases.png"
        priceGame6="DOWNLOAD"
      />

      <PlaystationPlus
        imageBG="./assets/psplus/Ps plus bg.png"
        imageGame="./assets/psplus/Games.png"
        imagePsnow="./assets/psplus/PS Plus Logo.png"
        Psnow="Hundreds of incredible games on demand, what will play first?"
      />

      <Trending title="Collections" />

      <Collections />

      <Trending title="Genres" />

      <Genres
        image1="./assets/genres/Action.png"
        image2="./assets/genres/Arcade.png"
        image3="./assets/genres/Fighting.png"
        image4="./assets/genres/Horror.png"
        image5="./assets/genres/Kids.png"
        image6="./assets/genres/Party.png"
      />

      <Genres
        image1="./assets/genres/Platform.png"
        image2="./assets/genres/Driving.png"
        image3="./assets/genres/RPG.png"
        image4="./assets/genres/Shooter.png"
        image5="./assets/genres/Simulation.png"
        image6="./assets/genres/Sports.png"
      />

      <Trending title="More" />

      <More />

      <Footer />
    </div>
  );
}
