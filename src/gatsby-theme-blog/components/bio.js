import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import myPhoto from "./tin_photo.jpg"
export default function Bio(params) {
  return (
    <div>
      <div className="columns ">
        <div className="column is-one-quarter-desktop">
          <figure class="image is-256x256">
            <img class="is-rounded" src={myPhoto} />
          </figure>
        </div>
        <div className="column ">
          <div className="content is-medium">
            <h3>
              Tin Theethawat {"/>"}{" "}
              <a href="https://instagram.com/tin_savastham">
                <FontAwesomeIcon icon={faInstagram} />
              </a>{" "}
              <a href="https://facebook.com/tin.savastham">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </h3>
            <p>
              Reseacher & Software Developer โปรแกรมบ้า ๆ คนนึง
              <br />
              ที่สนใจทั้งเรื่องคอมพิวเตอร์ ความคิด Culture และ
              เรื่องราวรอบตัวต่าง
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
