import logo from "./logoNCC.png";
const Home = () => {
  return (
    <section>
      <div className="home-title">
        <img src={logo} alt="" />
      </div>
      <div className="home-content">
        <div className="content-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat,
          iusto quisquam aspernatur consequuntur quam architecto nemo
          repellendus, consequatur impedit nisi veniam. Provident doloribus quod
          deleniti exercitationem ab, iure esse.
        </p>
      </div>
      <div className="home-card"></div>
    </section>
  );
};

export default Home;
