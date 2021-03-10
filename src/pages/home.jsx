import React from "react";

const Home = () => {
  console.log('Home');
  return (
    <>
      <main className="container">
        <div className="inner">
          {/* <h2>Home</h2> */}
          <section className="slide_main">
            <img src="./assets/images/main_hubilon_01.jpg" alt="" />
          </section>
          <section className="tit_main">
              <p>Hubilon, Technology that increases the value of your life</p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
