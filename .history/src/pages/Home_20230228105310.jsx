import logo from "./logoNCC.png";
import "./home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="home-title">
        <img src={logo} alt="" />
      </div>
      <div className="home-content">
        <div className="content-title">content-title</div>
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
      <div className="home-card"></div>
    </section>
  );
};

export default Home;
