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
import CardsPromotionsCodeNewbie from "./CardsPromotion/CardsPromotionsShopForem";
import CardsPromotionsShopForem from "./CardsPromotion/CardsPromotionsShopForem";

const AsideLinks = () => {
  return (
    <div className="col-12 col-md-3 col-lg-2 d-none d-md-block">
      <aside className={`${styles.asideLeft}`}>
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
        <div className={`mb-4 ${styles.sponsorCard}`}>
          <CardsPromotionsShopForem/>
        </div>
        <div className={`mb-4 ${styles.sponsorCard}`}>
          <CardsPromotionsCodeNewbie/>
        </div>
      </aside>
    </div>
  );
};

export default AsideLinks;
