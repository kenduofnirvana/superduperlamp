import React from 'react'

const About = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-light tracking-wider text-white mb-6">THE HUELE BIEN STORY</h2>
            <div className="w-20 h-0.5 bg-gold mb-8"></div>
            <p className="text-gray-300 mb-6">
              Founded with a passion for exceptional fragrances, Huele Bien by Prudent represents the pinnacle of luxury perfumery. Our journey began with a simple yet profound vision: to create scents that transcend the ordinary and evoke emotions that linger in memory.
            </p>
            <p className="text-gray-300 mb-6">
              Each fragrance in our collection is meticulously crafted by master perfumers who blend rare and precious ingredients sourced from around the world. We believe that a truly exceptional perfume is more than just a scent—it's an experience, a statement, and an extension of one's identity.
            </p>
            <p className="text-gray-300 mb-8">
              At Huele Bien, we are committed to excellence in every aspect of our craft, from the selection of ingredients to the design of our bottles. Our dedication to quality and artistry has made us a trusted name among connoisseurs of fine fragrances.
            </p>
            <button className="border border-gold text-gold px-8 py-3 font-medium hover:bg-gold hover:text-black transition duration-300">
              LEARN MORE
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                alt="Perfume crafting" 
                className="w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                alt="Luxury perfume" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                alt="Perfume bottle" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1595425964071-2c1b7eda0101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                alt="Perfume ingredients" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
