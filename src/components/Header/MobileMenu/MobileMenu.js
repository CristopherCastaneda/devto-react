import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import HomeItem from "../../AsideLeft/Items/HomeItem";
import ReadingListItem from "../../AsideLeft/Items/ReadingListItem";
import ListingsItem from "../../AsideLeft/Items/ListingsItem";
import PodcastItem from "../../AsideLeft/Items/PodcastItem";
import VideosItem from "../../AsideLeft/Items/VideosItem";
import TagsItem from "../../AsideLeft/Items/TagsItem";
import FaqItem from "../../AsideLeft/Items/FaqItem";
import ForemShopItem from "../../AsideLeft/Items/ForemShopItem";
import SponsorsItem from "../../AsideLeft/Items/SponsorsItem";
import AboutItem from "../../AsideLeft/Items/AboutItem";
import ContactItem from "../../AsideLeft/Items/ContactItem";
import GuidesItem from "../../AsideLeft/Items/GuidesItem";
import CodeConductItem from "../../AsideLeft/Items/CodeConductItem";
import PrivacyPolicyItem from "../../AsideLeft/Items/PrivacyPolicyItem";
import TermsUseItem from "../../AsideLeft/Items/TermsUseItem";
import TwitterItem from "../../AsideLeft/Items/TwitterItem";
import FacebookItem from "../../AsideLeft/Items/FacebookItem";
import GithubItem from "../../AsideLeft/Items/GithubItem";
import InstagramItem from "../../AsideLeft/Items/InstagramItem";
import TwitchItem from "../../AsideLeft/Items/TwitchItem";

import styles from "../Header.module.scss";

const MobileMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className="d-md-none"
      responsive="md"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>DEV Community 👩‍💻👨‍💻</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav className="mb-4 ">
          <ul className={`${styles.asideNavigationLinks}`}>
            <ListGroup variant="flush">
              <ListGroup.Item bsPrefix="test">
                <HomeItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <ReadingListItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <ListingsItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <PodcastItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <VideosItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <TagsItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <FaqItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <ForemShopItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <SponsorsItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <AboutItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <ContactItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <GuidesItem />
              </ListGroup.Item>
            </ListGroup>
          </ul>
        </nav>
        <nav className="mb-4">
          <h2 className="py-2">Other</h2>
          <ul className={`${styles.asideNavigationLinks}`}>
            <ListGroup variant="flush">
              <ListGroup.Item bsPrefix="test">
                <CodeConductItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <PrivacyPolicyItem />
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="test">
                <TermsUseItem />
              </ListGroup.Item>
            </ListGroup>
          </ul>
        </nav>
        <div className="social d-flex justify-content-between mb-4">
          <TwitterItem />
          <FacebookItem />
          <GithubItem />
          <InstagramItem />
          <TwitchItem />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;
