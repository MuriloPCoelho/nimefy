import { useState } from "react"
import CardPopup from "./CardPopup"

interface CardProps {
  image?: string
  title?: string
  categories?: [string, string, string]
  ageRating?: string
  year?: number
}

const Card = ({ params }: CardProps) => {
  const [popupShown, setPopupShown] = useState(false)

  return (
    <div
      className="aspect-video bg-neutral-800 rounded relative"
      onMouseOver={() => setPopupShown(true)}
      onMouseLeave={() => setPopupShown(false)}
    >
      {popupShown && <CardPopup />}
    </div>
  )
}

export default Card
