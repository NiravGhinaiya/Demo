import React, { Component } from "react";
import io from "socket.io-client";
import FilmexploreList from "./components/FilmexploreList";
// import { CryptoJS } from "crypto-js";
import arrow from './Image/arrow.png'
import Cookies from "universal-cookie";
import logout from './Image/logout.png'

const cookies = new Cookies();
const socket = io("https://digitalcms.sundance.org:3000/");


export class SocketData extends Component {
  constructor(props) {
    super(props);
    this.arrowRef = React.createRef();
    this.state = {
      filmList: [],
      itemsPerPage: 10,
      totalPages: 1,
      currentPage: 1,
      userDetail: this.props.location.state.userDetail,
      GostLoginDetail: this.props.location.state.GostLoginDetail,
      // leftArrow: 0,
    };
    this.arrowClick = this.arrowClick.bind(this);
    this.leftArrow = 0
  }


  componentDidMount() {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.emit("request", { event: "film|exploreList", data: {} });
    socket.on("response", (data) => {
      console.log(data);
      if (data.code === "200") {
        this.setState({
          filmList: data.data.rows,
          totalPages: Math.ceil(data.data.rows.length / 10),
        });
      }
    });

    document.addEventListener("keydown",(aa) => {
      if (aa.code === "NumpadDivide") {
        this.logoutUser();
      }
    })

  }

  componentWillUnmount() {
    // alert("socket off");
    socket.off();
  }

  handleClick = (event, pageNumber) => {
    event.preventDefault();
    this.setState({ currentPage: pageNumber });
  };

  arrowClick = (ele) => {
    let temp = document.getElementById('pagination-list')
    let divWidth = document.querySelector('.pagination').offsetWidth;
    let leftTemp = -(this.state.totalPages - (divWidth / 44)) * 44

    if (ele === "right" && this.leftArrow < 0) {
      temp.style.transform = `translate3d(${this.leftArrow += 44}px, 0px, 0px)`;
    }
    else if (ele === "left" && this.leftArrow > leftTemp) {
      temp.style.transform = `translate3d(${this.leftArrow -= 44}px, 0px, 0px)`;
    }
  }

  logoutUser = () => {
    cookies.remove("myEventiveLoginToken", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
    cookies.remove("eventive-token", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
    cookies.remove("SundanceNewUser", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
    cookies.remove("privateScreeningUser", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });

    this.props.history.push("/");
  }

  loginUserGeneral = () => {
    window.open("http://localhost:3003/")
    console.log(this.state.GostLoginDetail)
  }

  render() {
    const pages = [];
    for (let i = 1; i <= this.state.totalPages; i++) {
      pages.push(
        <li key={i} className={i === this.state.currentPage ? "active" : ""}>
          <a href="/" onClick={(e) => this.handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    let startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    let endIndex = startIndex + this.state.itemsPerPage;

    // cookies.remove("particularNewUser", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
    return (
      <>
        {
          !this.state.filmList.length > 0 && (
            <div className="loader-main">
              <span class="loader"></span>
            </div>
          )
        }
        {
          this.state.filmList.length > 0 &&
          (
            <div className="main-warper-content">
              <div className="heading">
                <h1>Film ExploreList</h1>
                <div className="heading-detail">
                  <h4 onClick={this.loginUserGeneral}>{this.state.userDetail ? `- ${this.state.userDetail.name}` : ''}</h4>
                  <button onClick={this.logoutUser}><img src={logout} alt="logout" /></button>
                </div>
              </div>
              <div className="film-list-warper">
                {this.state.filmList
                  ?.slice(startIndex, endIndex)
                  ?.map((film, i) => {
                    let tempImg = film.images.link
                      ? film.images.link
                      : film.images.inSite
                        ? `https://d2wsrejhnxatgp.cloudfront.net/${film.images.inSite}`
                        : "";
                    return (
                      <FilmexploreList
                        key={i}
                        label={film.category.name}
                        dateTime={film.dateTime}
                        title={film.title}
                        description={film.description}
                        imagePoster={tempImg}
                      />
                    );
                  })}
              </div>
              <div className="main-pagination" >
                <div className="pagination" ref={this.arrowRef} id="divPagination">
                  <ul id="pagination-list">{pages}</ul>
                </div>
                <div className="pagination-arrow">
                  <button onClick={() => this.arrowClick('left')}><img src={arrow} alt="arrow left" className="left-arrow" /></button>
                  <button onClick={() => this.arrowClick('right')}><img src={arrow} alt="arrow right" className="right-arrow" /></button>
                </div>
              </div>
            </div>
          )
        }
      </>
    );
  }
}

export default SocketData;