import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";

// console.log(" data", data?.sections?.SECTION_SEARCH_RESULT[0]);
export function Header() {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://www.shutterstock.com/shutterstock/photos/1328492696/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328492696.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
export function RestaurantCard({ resData }) {
  return (
    <div className="res-card">
      <img className="res-logo" src={resData?.info?.image?.url} />
      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisine[0]?.name}</h4>
      <h4>{resData?.order?.deliveryTime}</h4>
      <h4>{resData?.info?.rating?.rating_text} starts</h4>
    </div>
  );
}

export function Body() {
  const restList = data?.sections?.SECTION_SEARCH_RESULT;
  return (
    <div className="body">
      <div className="search"> Search{/* <input /> */}</div>
      <div className="res-container">
        {restList.map((restaurentData, idx) => (
          <RestaurantCard
            resData={restaurentData}
            key={restaurentData?.info?.resId}
            // not using keys (not acceptable <<<<< index as key <<<<<< unique key (best practice)
          />
        ))}
      </div>
    </div>
  );
}

export function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/** 
  Episode 1/2/3 Content
 */

// import React from "react";
// import ReactDOM from "react-dom";

// // React Element
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World ! with React"
// );
// // it nothing buts returns object
// console.log(heading);

// const Title = () => {
//   return <h1>Bro React</h1>;
// };

// // React Functinal component
// const HeadingComponent = () => {
//   return (
//     <>
//       <Title />
//       <h1>Functional Component Lets Rocks</h1>
//     </>
//   );
// };

// // JSX
// // const jsxElement = <h1>Hello React !</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
