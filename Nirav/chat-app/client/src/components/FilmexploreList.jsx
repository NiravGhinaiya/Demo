import React, { Component } from "react";
import moment from "moment";

export class FilmexploreList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="film-card">
        <div className="film-image">
          <img
            src={this.props.imagePoster}
            alt="filmImg"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://assets.festival.sundance.org/unsafe/340x191/filters:quality(80)/https://d2wsrejhnxatgp.cloudfront.net/partner/635h411hkistockphoto-1409271522-170667a.jpg";
            }}
          />
        </div>
        <div className="film-detail">
          <div className="film-label">
            <h4>{this.props.label}</h4>
          </div>
          <div className="film-des">
            <h2>{this.props.title}</h2>
            <div
              className="film-description"
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            >
              {/* <p>{this.props.description}</p> */}
            </div>
          </div>
          <div className="film-time">
            {this.props.dateTime.length > 0 &&
              this.props.dateTime?.slice(0, 10)?.map((time, i) => {
                let yC = moment(time?.date).format("MMM. mm, h:mm a");
                return <span key={i}>{yC}</span>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default FilmexploreList;
