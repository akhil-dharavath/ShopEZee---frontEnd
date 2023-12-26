import React from 'react'
import SpecificationsCard from './SpecificationsCard'
import PublicIcon from "@mui/icons-material/Public";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HttpsIcon from "@mui/icons-material/Https";

const Specifications = () => {
  return (
    <div className="row col-12 m-auto specificationsRow mb-5">
        <SpecificationsCard
          Icon={PublicIcon}
          title={"Worldwide Shipping"}
          description={
            "Transport used for conveying goods using sea routes, roads and air channels."
          }
        />
        <SpecificationsCard
          Icon={CategoryIcon}
          title={"Best Quality"}
          description={
            "Product satisfies customer needs, serves its purpose and meets industry standards"
          }
        />
        <SpecificationsCard
          Icon={LocalOfferIcon}
          title={"Best Offers"}
          description={
            "Grab it now before it's gone! Don't miss out on this limited-time deal!"
          }
        />
        <SpecificationsCard
          Icon={HttpsIcon}
          title={"Secure Payments"}
          description={
            "Protect user's financial data during Internet transactions."
          }
        />
      </div>
  )
}

export default Specifications
