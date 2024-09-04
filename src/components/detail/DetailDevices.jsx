import React from "react";

const DetailDevices = () => {
  return (
    <div className="details__wrap">
      <div className="details__devices">
        <span className="details__devices-title">Disponible en:</span>
        <ul className="details__devices-list">
          <li>
            <i className="icon ion-logo-apple"></i>
            <span>IOS</span>
          </li>
          <li>
            <i className="icon ion-logo-android"></i>
            <span>Android</span>
          </li>
          <li>
            <i className="icon ion-logo-windows"></i>
            <span>Windows</span>
          </li>
          <li>
            <i className="icon ion-md-tv"></i>
            <span>Smart TV</span>
          </li>
        </ul>
      </div>

      <div className="details__share">
        <span className="details__share-title">Compartir con amigos:</span>

        <ul className="details__share-list">
          <li className="facebook">
            <a href="#">
              <i className="icon ion-logo-facebook"></i>
            </a>
          </li>
          <li className="instagram">
            <a href="#">
              <i className="icon ion-logo-instagram"></i>
            </a>
          </li>
          <li className="twitter">
            <a href="#">
              <i className="icon ion-logo-twitter"></i>
            </a>
          </li>
          <li className="vk">
            <a href="#">
              <i className="icon ion-logo-vk"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailDevices;
