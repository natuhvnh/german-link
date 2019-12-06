import React, { Component } from "react";

class Maps extends Component {
  render() {
    return (
      <div>
        <a href="https://goo.gl/maps/VVAfMvLdRH7q8xww5">
          <div>
            <iframe
              className="location"
              title="german-link-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.097742479827!2d105.85017601476339!3d21.028774735998436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb4f9a20e!2zSG_DoG4gS2nhur9tIExha2U!5e0!3m2!1sen!2s!4v1575516265243!5m2!1sen!2s"
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        </a>
      </div>
    );
  }
}

export default Maps;
