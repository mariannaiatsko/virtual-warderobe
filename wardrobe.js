* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Helvetica Neue', sans-serif;
color: #111;
}

header {
position: sticky;
top: 0;
background-color: rgb(243, 229, 236);
padding: 20px 40px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #eee;
z-index: 1000;
}

.logo {
font-size: 20px;
font-weight: bold;
letter-spacing: 1px;
}

nav a {
margin: 0 15px;
text-decoration: blanchedalmond;
color: #333;
font-weight: 500;
}

.register-btn {
background-color: black;
color: white;
border: none;
padding: 10px 18px;
border-radius: 5px;
cursor: pointer;
}

.hero {
display: flex;
flex-wrap: wrap;
padding: 50px;
background: #f9e8ef;
align-items: center;
justify-content: space-between;
}

.hero-text {
  text-align: left;
  padding: 2rem;
  max-width: 600px;
  margin-left: 5%;
  color: #333;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-text h4 {
  font-size: 1.25rem;
  line-height: 1.6;
}

main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
body {
  margin: 0;
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(to right, #edd9e3, #f0d3eb);
}

.hero-section {
  display: flex;
  justify-content: center;
  padding: 3rem;
}

.hero-card {
  display: flex;
  background-color: rgb(233, 220, 225);
  border-radius: 40px;
  overflow: hidden;
  max-width: 1600px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.hero-left {
  flex: 1;
  padding: 3rem;
  color: #333;
}

.hero-left .subtitle {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
}

.hero-left h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-left p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-btn {
  display: inline-block;
  background-color: #111111;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: background 0.3s;
}

.cta-btn:hover {
  background-color: #1c1c1c;
}

.hero-right {
  flex: 1.5;
  overflow: hidden;
}

.hero-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
