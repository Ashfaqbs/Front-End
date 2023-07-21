export const hi = () => {
  console.log("Hi");
};

export const Ahi = (name) => {
  console.log("Hi" + name);
};

//sending a function directly to module in JS.js
export default function sample ()  {
  console.log("Hello  from default");
};
