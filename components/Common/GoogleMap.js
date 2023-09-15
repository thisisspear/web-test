import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="container ptb-100">
        <div className="map-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.75286749833768!2d126.91979808726362!3d37.53041574723513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45fe5fb28d7f%3A0x628896ee71f00275!2z6rWt7ZqM7J2Y7IKs64u57JetIEJuQu2DgOybjCjruYTsl5TruYTruYzrlKkp!5e0!3m2!1sko!2skr!4v1689136325397!5m2!1sko!2skr"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
