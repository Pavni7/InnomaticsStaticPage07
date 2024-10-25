import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import "./App.css";

 
// Components for different pages
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? 'bg-blue-900' : 'bg-gray-800'} min-h-screen transition-colors duration-300`}>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Innomatics Research Labs</div>


          {/* Toggle Button for Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300 ${
                    isActive ? 'nav-link-active bg-blue-400' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300 ${
                    isActive ? 'nav-link-active bg-blue-400' : ''
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300 ${
                    isActive ? 'nav-link-active bg-blue-400' : ''
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300 ${
                    isActive ? 'nav-link-active bg-blue-400' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

    

const Home = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center neon-background">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 neon-text text-center">
        Welcome to Innomatics Research Labs
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center neon-text">
        Transforming careers through cutting-edge data science education and research
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-lg neon-card">
          <h3 className="text-xl font-semibold mb-4 neon-text text-center">Data Science</h3>
          <p className="text-gray-400 text-center">
            Comprehensive training in machine learning, AI, and data analytics
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg neon-card">
          <h3 className="text-xl font-semibold mb-4 neon-text text-center">Full Stack Development</h3>
          <p className="text-gray-400 text-center">
            Modern web development with React, Node.js, and Python
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg neon-card">
          <h3 className="text-xl font-semibold mb-4 neon-text text-center">Research</h3>
          <p className="text-gray-400 text-center">
            Cutting-edge research in AI and machine learning applications
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Innomatics</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 mb-6">
          Innomatics Research Labs is a leading institution in data science and technology education.
          We believe in practical, hands-on learning that prepares students for real-world challenges.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals with cutting-edge skills in data science and technology,
              enabling them to solve complex problems and drive innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in technology education and research,
              fostering a community of innovative problem-solvers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <NavLink to="/services/training" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
            <p className="text-gray-600">
              Comprehensive training in data science, machine learning, and web development.
            </p>
          </div>
        </NavLink>
        <NavLink to="/services/consulting" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
            <p className="text-gray-600">
              Expert consulting for businesses in AI and data science implementation.
            </p>
          </div>
        </NavLink>
      </div>
      <Routes>
        <Route path="training" element={<ServiceTraining />} />
        <Route path="consulting" element={<ServiceConsulting />} />
      </Routes>
    </div>
  </div>
);

const ServiceTraining = () => (
  <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-bold mb-4">Training Programs</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border p-4 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Data Science Bootcamp</h4>
        <p className="text-gray-600">6-month intensive program covering machine learning, AI, and statistics</p>
      </div>
      <div className="border p-4 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Web Development Course</h4>
        <p className="text-gray-600">Learn full-stack development with modern technologies</p>
      </div>
    </div>
  </div>
);

const ServiceConsulting = () => (
  <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-bold mb-4">Consulting Services</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border p-4 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">AI Implementation</h4>
        <p className="text-gray-600">Custom AI solutions for your business needs</p>
      </div>
      <div className="border p-4 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Data Strategy</h4>
        <p className="text-gray-600">Develop comprehensive data strategies for your organization</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, you can submit it here
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen neon-background py-12 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto neon-card p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg neon-input focus:ring-2 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
  
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg neon-input focus:ring-2 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
  
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2 px-5 py-5 center" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2 rounded-lg neon-input focus:ring-2 ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
  
            <button
              type="submit"
              className="w-full neon-button py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}  

const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <NavLink 
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go Home
      </NavLink>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;