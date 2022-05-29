import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10 ">
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q1. How will you improve the performance of a React Application?</h2>
          <p>Using Immutable Data Structures, Function/Stateless Components and React.PureComponent, Dependency optimization, Use React.Fragments to Avoid Additional HTML Element Wrappers,  Avoid Inline Function Definition in the Render Function., Avoiding Props in Initial States, Spreading props on DOM elements,  CSS Animations Instead of JS Animations.</p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q2. What are the different ways to manage a state in a React application?</h2>
          <p>Local (UI) state – Local state is data we manage in one or another component.Global (UI) state – Global state is data we manage across multiple components.Server state – Data that comes from an external server that must be integrated with our UI state.URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q3. How does prototypical inheritance work?</h2>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
          <p> </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
          <p> </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl bg-neutral text-white">
        <div className="card-body">
          <h2 className="card-title">Q6. What is a unit test? Why should write unit tests?</h2>
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.These frameworks are also set to flag and report any failed test cases while also providing a summary of test cases. </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
