function Home() {
    return (
      <div className="home">
        <link rel="icon" href="/media/home-icon.png" />
        <header
          style={{
            backgroundColor: "var(--primary-blue)",
            color: "var(--text-color)",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <h1>React Store</h1>
          <nav>
            <a
              href="#"
              style={{ color: "var(--text-color)", margin: "0 1rem" }}
            >
              Home
            </a>
            <a
              href="#"
              style={{ color: "var(--text-color)", margin: "0 1rem" }}
            >
              Products
            </a>
            <a
              href="#"
              style={{ color: "var(--text-color)", margin: "0 1rem" }}
            >
              Cart
            </a>
          </nav>
        </header>
        <main
          style={{
            padding: "2rem",
            backgroundColor: "var(--light-blue)",
            minHeight: "60vh",
          }}
        >
          <h2>Welcome to Our Store</h2>
          <p>Discover amazing products with our blue-themed design.</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button
              style={{
                backgroundColor: "var(--medium-blue)",
                color: "var(--text-color)",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
              }}
            >
              Shop Now
            </button>
            <button
              style={{
                backgroundColor: "var(--accent-blue)",
                color: "var(--text-color)",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
              }}
            >
              Learn More
            </button>
          </div>
        </main>
        <footer
          style={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--text-color)",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <p>&copy; 2026 React Store. All rights reserved.</p>
        </footer>
      </div>
    );
}

export default Home