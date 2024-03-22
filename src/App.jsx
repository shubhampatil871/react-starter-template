import React from "react";

const StarterTemplateInstructions = () => {
  return (
    <div className="container mx-auto my-16 font-mono text-yellow-50 flex justify-center items-center">
      <div className="card bg-slate-900 rounded-2xl shadow-xl shadow-slate-500/10 max-w-4xl">
        <div className="card-body w-auto">
          <h2 className="text-6xl font-semibold text-yellow-200 font-mono text-center">
            {`<React/> Starter Template`}
          </h2>
          <p>
            Follow these steps to create a starter template with React, Vite,
            Tailwind CSS, daisyUI, Prettier, & other optionals like environment
            variables, path aliases, and absolute imports.
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <strong>Install Node.js and Yarn</strong>
              <p>
                Ensure you have Node.js (v12 or higher) and Yarn installed on
                your machine.
              </p>
            </li>
            <li>
              <strong>Create a new React project with Vite</strong>
              <pre className="mockup-code px-4">
                <code>yarn create vite my-react-starter --template react</code>
              </pre>
            </li>
            <li>
              <strong>Navigate to the project directory</strong>
              <pre className="mockup-code">
                <code>cd my-react-starter</code>
              </pre>
            </li>
            <li>
              <strong>Install additional dependencies</strong>
              <pre className="mockup-code">
                <code>
                  yarn add -D tailwindcss postcss autoprefixer prettier dotenv
                </code>
              </pre>
            </li>
            {/* Rest of the instructions... */}
          </ol>
          <div className="card-actions justify-center">
            <a
              href="https://github.com/shubhampatil871/react-starter-template"
              className="btn btn-primary m-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterTemplateInstructions;
