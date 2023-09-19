// what do i want to render in the screen and in where do i want to render it like which HTML element
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"));

// ReactDOM.render(
//   <h1>Hello, react this is a H1 tag</h1>,
//   document.getElementById("root")
// );

//rendering multiple elements

// ReactDOM.render(<u>
//   <li>Virat</li>
//   <li>India</li>
//   <li>Cricket </li>

//   </u>,document.querySelector("#root"))

//Rendering Custom components

// function Navbar() {
//   return (
//     <nav class="navbar">
//       <div class="logo">MUO</div>

//       <ul class="nav-links">
//         <input type="checkbox" id="checkbox_toggle" />
//         <label for="checkbox_toggle" class="hamburger">
//           &#9776;
//         </label>

//         <div class="menu">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/">About</a>
//           </li>

//           <li class="services">
//             <a href="/">Services</a>

//             <ul class="dropdown">
//               <li>
//                 <a href="/">Dropdown 1 </a>
//               </li>
//               <li>
//                 <a href="/">Dropdown 2</a>
//               </li>
//               <li>
//                 <a href="/">Dropdown 2</a>
//               </li>
//               <li>
//                 <a href="/">Dropdown 3</a>
//               </li>
//               <li>
//                 <a href="/">Dropdown 4</a>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <a href="/">Pricing</a>
//           </li>
//           <li>
//             <a href="/">Contact</a>
//           </li>
//         </div>
//       </ul>
//     </nav>
//   );
// }

// function MainContent() {
//   return (
//     <div class="row">
//       <div class="col-sm-6">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">Special title treatment</h5>
//             <p class="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       </div>
//       <div class="col-sm-6">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">Special title treatment</h5>
//             <p class="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

//this is a concept of composebility
// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// ----------------------------------------------------------------
//Reasons people love react
//React is Declarative
//to understand declarative its opposite is imperative
// eg declarative means
// what should be done :  Just tell me(i.e to program) what to do  , and ill worry how do get it done
//
// Imperative How should it be done :  Describe to me every step on how to do something and ill do it program says

//Imperative way of Programming

// const h1 = document.createElement("h1");
//content we are going to add
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);
//here even though this is a static content we could have add it in the html page it self , but in react we will create html elements in Javascript
// and for a simple project this would take 100 of lines and we would be telling each step

//Declarative way of programming

// ReactDOM.render(  <h1 className="header">Hello, react this is a H1 tag</h1>,   document.getElementById("root"));
//in JS its class but in react className now  react will find the way of adding content in h1 and h1 tag in that root id element

///JSX

//React team create a syntax called JSXjavascript XML  ,think of like its flavor of Js which look like HTML by this react become really declarative

// ReactDOM.render(
//   <h1 className="header">Hello, JSX</h1>,
//   document.getElementById("root")
// );

//we cannot put two elements
// ReactDOM.render(
//   <h1 className="header">This is JSX</h1><p>This is a paragraph</p>,
//   document.getElementById("root")
// )
// error !Error: Unknown error

//We can

// ReactDOM.render(
//   <div>
//       <h1 className="header">This is JSX</h1>
//       <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// )

//Or

// const page = (
//   <div>
//       <h1 className="header">This is JSX</h1>
//       <p>This is a paragraph</p>
//   </div>
// )
// ReactDOM.render(
//   page,
//   document.getElementById("root")
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
//Renzdering a JSX elements
const navbar = (
  <header>
    <nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Feedback</li>
      </ul>
    </nav>
  </header>
);
console.log(navbar);

ReactDOM.render(navbar, document.getElementById("root"));
