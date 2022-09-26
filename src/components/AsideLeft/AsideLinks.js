import React from "react";
import styles from "./AsideLinks.module.scss";

import HomeItem from "./Items/HomeItem";
import ReadingListItem from "./Items/ReadingListItem";
import ListingsItem from "./Items/ListingsItem";
import PodcastItem from "./Items/PodcastItem";
import VideosItem from "./Items/VideosItem";
import TagsItem from "./Items/TagsItem";
import FaqItem from "./Items/FaqItem";
import ForemShopItem from "./Items/ForemShopItem";
import SponsorsItem from "./Items/SponsorsItem";
import AboutItem from "./Items/AboutItem";
import ContactItem from "./Items/ContactItem";
import GuidesItem from "./Items/GuidesItem";
import CodeConductItem from "./Items/CodeConductItem";
import PrivacyPolicyItem from "./Items/PrivacyPolicyItem";
import TermsUseItem from "./Items/TermsUseItem";
import TwitterItem from "./Items/TwitterItem";
import FacebookItem from "./Items/FacebookItem";
import GithubItem from "./Items/GithubItem";
import InstagramItem from "./Items/InstagramItem";
import TwitchItem from "./Items/TwitchItem";
import MyTags from "./Tags/MyTags";
import MyTagsLinks from "./Tags/MyTagsLinks";
import CardsPromotions from "./CardsPromotion/CardsPromotions";

const AsideLinks = () => {
  return (
    <>
    <nav className="mb-4 ">
          <ul className={`${styles.asideNavigationLinks}`}>
            <HomeItem />
            <ReadingListItem />
            <ListingsItem />
            <PodcastItem />
            <VideosItem />
            <TagsItem />
            <FaqItem />
            <ForemShopItem />
            <SponsorsItem />
            <AboutItem />
            <ContactItem />
            <GuidesItem />
          </ul>
        </nav>
        <nav className="mb-4">
          <h2 className="py-2">Other</h2>
          <ul className={`${styles.asideNavigationLinks}`}>
            <CodeConductItem />
            <PrivacyPolicyItem />
            <TermsUseItem />
          </ul>
        </nav>

        <div className="social d-flex justify-content-between mb-4">
          <TwitterItem />
          <FacebookItem />
          <GithubItem />
          <InstagramItem />
          <TwitchItem />
        </div>
        <nav className="mb-6" aria-label="aside-tags-nav">
          <div className="pt-2 pl-3 pb-0 pr-0 d-flex align-items-baseline justify-content-between">
            <MyTags />
          </div>
          <div className={`p-1 mb-4 ${styles.asideTags} d-flex flex-column`}>
            <MyTagsLinks />
          </div>
        </nav>
        
          <CardsPromotions banner="https://res.cloudinary.com/practicaldev/image/fetch/s--fIs7T4ga--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://jess.forem.lol/remoteimages/uploads/articles/9ga7i09w99yubqm4fxrv.png"
          title="<strong>Calling all early-career developers &amp; coding mentors!</strong>"
          content={`<p>
            Join CodeNewbie Community: a supportive space for coding newbies to
            connect &amp; express themselves.{" "}
            <strong>
              <a href="#">Get in on the fun!</a>
            </strong>
          </p>`}
          />
          <CardsPromotions banner="https://res.cloudinary.com/practicaldev/image/fetch/s--vf_P4FwD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://p32.f1.n0.cdn.getcloudapp.com/items/OAu6mnD1/20ada628-9434-4772-a8e0-7d861713d3c4.jpg" 
            title="The Forem Shop is Here!"
            content={` <strong>
            <a href="#">&gt;&gt; Shop Forem, DEV, and CodeNewbie merch</a>
          </strong>`}
          />          
                
    </>
  );
};

export default AsideLinks;
