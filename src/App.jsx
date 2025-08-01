import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Github, Linkedin, Mail, Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    'C#', 'Delphi', 'Python', 'R', 'Java', '.NET', 'Flutter',
    'PostgreSQL', 'MariaDB', 'MySQL', 'Microsoft SQL Server', 'Firebird', 'Firebase',
    'Azure', 'Google Cloud', 'AWS',
    'Git', 'Power BI',
    'Linux', 'Unix', 'FreeBSD', 'Windows Server',
    'AutoCAD', 'SolidWorks'
  ]

  const projects = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive IT infrastructure management using Azure, Google Cloud, and AWS platforms with automated deployment and monitoring.",
      year: "2024",
      technologies: ["Azure", "Google Cloud", "AWS", "Linux", "Windows Server"],
      category: "Cloud Computing"
    },
    {
      title: "Educational Platform Development",
      description: "Multi-platform educational application built with Flutter for cross-platform compatibility and enhanced learning experience.",
      year: "2023",
      technologies: ["Flutter", "Firebase", "Python", "PostgreSQL"],
      category: "Education Technology"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Advanced business intelligence dashboard using Power BI and R for comprehensive data analysis and visualization.",
      year: "2023",
      technologies: ["Power BI", "R", "Python", "SQL Server"],
      category: "Data Analytics"
    },
    {
      title: "Enterprise System Integration",
      description: "Large-scale enterprise system integration using .NET and Java with microservices architecture.",
      year: "2022",
      technologies: [".NET", "Java", "PostgreSQL", "Azure"],
      category: "Enterprise Solutions"
    }
  ]

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Project Success Rate" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">RTC</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 hover:text-green-400 transition-colors">About</a>
                <a href="#projects" className="block px-3 py-2 hover:text-green-400 transition-colors">Projects</a>
                <a href="#skills" className="block px-3 py-2 hover:text-green-400 transition-colors">Skills</a>
                <a href="#contact" className="block px-3 py-2 hover:text-green-400 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl font-bold">
              RTC
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent">
            A COMPUTER ENGINEER
            <br />
            WORKING REMOTELY
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm Rui Tobias Carvalho, a Computer Engineer and Math & Physics Educator building 
            high-performance systems with clean code, scalability, and seamless integrations.
          </p>
          
          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 text-lg"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="mr-2" size={20} />
            Scroll To Explore
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">ABOUT ME</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                I'M WORKING AS A COMPUTER ENGINEER TO DEVELOP SYSTEMS AND APPLICATIONS 
                FOR SMALL TO MID-SIZED COMPANIES AND EDUCATIONAL INSTITUTIONS STARTING IN 2018.
              </p>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
              >
                MORE ABOUT ME
              </Button>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {['Systems Development', 'Cloud Computing', 'Infrastructure Management', 'Education'].map((skill, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg text-center border border-gray-700 hover:border-green-500 transition-colors">
                <h3 className="font-semibold text-green-400">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">MY PROJECTS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-green-500 text-green-500">
                      {project.year}
                    </Badge>
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">TECH STACK</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-black/50 p-4 rounded-lg text-center border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
            LOOK AT THE PROGRESS AND RESULTS I'VE
            <br />
            ACHIEVED THROUGH MY WORKS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-green-400 mb-4">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">LET'S CONNECT</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/rui-tobias-carvalho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-black/50 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/rui-tobias-carvalho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-black/50 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:rui@example.com"
              className="p-4 bg-black/50 rounded-full border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="bg-black/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Academic Background</h3>
            <p className="text-lg text-gray-300 mb-2">
              🎓 Computer Engineering
            </p>
            <p className="text-gray-400">
              Virtual University of the State of São Paulo — 2018 to 2024
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Languages</h4>
              <div className="flex justify-center space-x-8 text-sm">
                <span>🇧🇷 Portuguese: Native</span>
                <span>🇺🇸 English: Advanced</span>
                <span>🇪🇸 Spanish: Basic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Rui Tobias Carvalho. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

