import React, { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    document.title = "홈";
  }, [props]);

  return <div>The Movie DB APP</div>;
}

export default Home;
