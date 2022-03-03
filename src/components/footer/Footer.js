import * as React from "react"
import * as Style from "./footer.module.css"

import githubIcon from "../../images/icon/footer_github.png"
import instaIcon from "../../images/icon/footer_insta.png"
import emailIcon from "../../images/icon/footer_email.png"
import kakaoIcon from "../../images/icon/footer_kakao.png"
import DownIcon from "../svgs/down"

const FooterIcon = ({ src, alt, link }) => {
  return (
    <a className={Style.icon} href={link} target="_blank">
      <img src={src} alt={alt} width="60" />
    </a>
  )
}

const Footer = () => {
  return (
    <footer className={Style.wrap}>
      <p className={Style.title}>Get in touch!</p>
      <div className={Style.iconWrap}>
        <FooterIcon
          src={githubIcon}
          link={"https://github.com/Yenowme"}
          alt={"githubIcon"}
        />
        <FooterIcon
          src={emailIcon}
          link={"mailto:'sag03137@gmail.com'"}
          alt={"emailIcon"}
        />
        <FooterIcon
          src={instaIcon}
          link={"https://www.instagram.com/d.nowme/"}
          alt={"instaIcon"}
        />
        <FooterIcon
          src={kakaoIcon}
          link={"https://open.kakao.com/o/sd9Lmt3d"}
          alt={"kakaoIcon"}
        />
      </div>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <DownIcon className={Style.topIcon} />
      </div>
    </footer>
  )
}

export default Footer
