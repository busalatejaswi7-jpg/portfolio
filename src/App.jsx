import "./App.css";

function App() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Busala Tejaswi</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          Focused on building scalable full-stack applications using React,
          Node.js, Express, and MongoDB. Passionate about frontend development
          and continuously improving through real-world projects.
        </p>
      </section>

      <section className="section">
        <h3>About Me</h3>
        <p>
          I enjoy developing responsive user interfaces and designing secure,
          efficient backend systems. Currently expanding my expertise in
          production-ready applications, API architecture, and modern web
          development best practices.
        </p>
      </section>

      <section className="section">
        <h3>Projects</h3>

        <div className="project">
          <h4>Task Management Backend API</h4>
          <p>
            Developed a secure RESTful API using Node.js, Express, and MongoDB.
            Implemented JWT authentication, role-based authorization, protected
            CRUD operations, filtering, pagination, sorting, and admin
            analytics endpoints. Deployed using Render with MongoDB Atlas.
          </p>
          <a
            href="https://github.com/busalatejaswi7-jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </div>

        <div className="project">
          <h4>Food Ordering Application</h4>
          <p>
            Built a modular React application with dynamic filtering, real-time
            search functionality, lazy loading using React Suspense, and
            online/offline detection using Browser APIs. Focused on clean
            component architecture and performance optimization.
          </p>
          <a
            href="https://github.com/busalatejaswi7-jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </div>
      </section>

      <section className="section">
        <h3>Technical Skills</h3>
        <p>
          React.js | Node.js | Express.js | MongoDB | REST APIs | JWT | Git |
          JavaScript | HTML | CSS
        </p>
      </section>

      <section className="section">
        <h3>Contact</h3>
        <p>Email: rs200228@rguktsklm.ac.in</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/busalatejaswi7-jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/busalatejaswi7-jpg
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
