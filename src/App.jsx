// import React, { useState } from "react";

// function App() {
//   //* This will cause a compilation error
//   //* because you cannot redeclare a variable
//   //*  in the same scope.

//   const [username, setUsername] = useState("Abrar");
//   let username = "Abrar";

//   const [counter, setCounter] = useState(0);

//   function addCounter() {
//     username = "TKD";
//     setUsername("TKD");
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);

//     setCounter((prevVal) => prevVal + 1);
//     setCounter((prevVal) => prevVal + 1);
//     setCounter((prevVal) => prevVal + 1);
//     setCounter((prevVal) => prevVal + 1);
//   }

//   return (
//     <>
//       <h1>Counter {counter}</h1>
//       <button onClick={addCounter}>Add counter</button>
//     </>
//   );
// }

// export default App;

//********** THE CORRECT WAY TO DO THIS EXAMPLE *************************************
//********** INTERVIEW QUESTION *************************************

// import React, { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("Abrar");
//   const [counter, setCounter] = useState(0);

//   function addCounter() {
//     setUsername("TKD");
//     //* THIS WILL ONLY CALLS ONCE
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);

//* THIS WILL COMBINE ALL THE LINES THEN CALL IT
//* IN THIS EXAMPLE I HAVE 5 LINES OF THIS WITH ONE CLICK
//* IT WILL INCREASE 5 TIMES
// setCounter((prevVal) => prevVal + 1);
// setCounter((prevVal) => prevVal + 1);
// setCounter((prevVal) => prevVal + 1);
// setCounter((prevVal) => prevVal + 1);
// setCounter((prevVal) => prevVal + 1);
//   }

//   return (
//     <>
//       <h1>Counter {counter}</h1>
//       <button onClick={addCounter}>Add counter</button>
//     </>
//   );
// }
// export default App;

//********** CARDS EXAMPLE CODE   *************************************

// import React, { useEffect, useState } from "react";
// import Card from "./components/Card";

// const App = () => {
//   return (
//     <>
//       <h1>Welcome</h1>
//       <Card title="mehran boss 1990" description="best car in the world">
//         150000
//       </Card>
//       <Card title="carry dabba Boss 1996" description="best lodar in the world">
//         200000
//       </Card>
//       <Card
//         title="vigo dalaa bagg malik"
//         description="best talepoter in the world"
//       >
//         900000
//       </Card>
//     </>
//   );
// };

// export default App;

//********* parent to children *************************************
//********* chidren to parent *************************************
//********* EXAMPLES *************************************

// import React, { useState, useEffect } from "react";
// import User from "./components/User";

// const App = () => {
//   const [userAge, setUserAge] = useState(0);
//   const [username, setUsername] = useState("abrar");
//   const [userComp, setUserComp] = useState(false);

//   useEffect(() => {
//     console.log("App component mounted");
//   }, [userAge]);

//   function getData(age) {
//     console.log("get data from children component");
//     console.log(age);
//     setUserAge(age);
//   }

//   return (
//     <>
//       <h1>Welcom {userAge}</h1>
//       {userComp ? <User username={username} func={getData} /> : null}

//       <button onClick={() => setUserComp(!userComp)}>
//         user component [this will show you the name]
//       </button>
//       <button onClick={() => setUsername("TKD")}>username</button>

//       <button onClick={() => setUserAge(userAge + 1)}>
//         Chnage Age [THIS WILL INCREASE THE AGE ]
//       </button>
//     </>
//   );
// };
// export default App;

// *************************************************************************************************
// // Import the necessary dependencies from React
// import React, { useState, useEffect } from "react";

// // Define the App component
// function App() {
//   // Initialize the counter state with a default value of 0
//   const [counter, setCounter] = useState(0);

//   // Initialize the data state with an empty array
//   const [data, setData] = useState([]);

//   // Use the useEffect hook to fetch data when the component mounts
//   useEffect(() => {
//     // Make a GET request to the JSONPlaceholder API to fetch users data
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         // Check if the response is OK (200-299)
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         // Parse the response data as JSON
//         return response.json();
//       })
//       .then((json) => {
//         // Update the data state with the fetched data
//         setData(json);
//         // Log the fetched data to the console
//         console.log(json);
//       })
//       .catch((error) => {
//         // Log any errors to the console
//         console.log(error);
//       });
//   }, []); // The empty dependency array means this effect will only run once when the component mounts

//   // Return the JSX for the component
//   return (
//     <>
//       {/* Display the counter value */}
//       <h1>Yolo World!!! {counter}</h1>
//       {/* Button to increment the counter */}
//       <button onClick={() => setCounter(counter + 1)}>Add counter</button>
//       {/* Conditionally render the data or a loading message */}
//       {data ? (
//         // Map over the data array and render a div for each item
//         data.map((item) => {
//           return (
//             <div key={item.id}>
//               {/* Display the name and email for each item */}
//               <h1>Name: {item.name}</h1>
//               <h1>Email: {item.email}</h1>
//               <hr />
//             </div>
//           );
//         })
//       ) : (
//         // Display a loading message if data is not yet available
//         <h1>Loading...</h1>
//       )}
//     </>
//   );
// }

// // Export the App component as the default export
// export default App;
