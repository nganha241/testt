import logo from "./logoNCC.png";
import "./home.css";
import Card from "./home-card/Card";
import htmlic from "./html-icon.png";
import urlic from "./url-icon.png";
import cssic from "./css-icon.png";
import Nav from "./nav/Nav";
const Home = () => {
  return (
    <section className="home">
      <Nav />
      <div className="home-title">
        <img src={logo} alt="" />
      </div>
      <div className="home-content">
        <div className="content-title">Lorem ipsum dolor sit asmet?</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="home-card">
        <Card icon={cssic} />
        <Card icon={htmlic} />
        <Card icon={urlic} />
      </div>
    </section>
  );
};

export default Home;
