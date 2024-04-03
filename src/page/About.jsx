import { Footer } from "../component/Footer"
import Headers from "../component/Header"



export const About = () => {
  return (
  <>
  <Headers/>
    <div>
  <div>
    <img src="https://i.pinimg.com/originals/33/30/85/333085dde650f2947ee328bd4e1870e2.jpg" alt="about" className="h-96 w-[100vw] object-cover"/>
  </div >
       <div className="mr-[4rem] ml-[4rem] text-justify mt-10 text-[20px] ">
        <h1 className="font-bold">About </h1>
        <p className="text-gray-600">At [Your Website Name], we are dedicated to revolutionizing the way individuals approach financial decision-making. Our platform offers cutting-edge loan prediction services designed to assess users' eligibility for loans based on various input factors, including income, marital status, gender, and more. We understand the significance of accessing reliable and accurate information when it comes to securing financial assistance, which is why we leverage advanced algorithms to provide precise predictions tailored to each user's unique circumstances.</p>
        <p className="text-gray-600">Once a loan is accepted through our platform, users gain access to additional features, including the ability to calculate interest rates based on bank rates and the predicted data stored in our secure database. This empowers users to make informed decisions regarding their financial futures, ensuring they have the tools and insights needed to navigate the complexities of the lending process.</p>
        <p  className="text-gray-600">At [Your Website Name], we are committed to transparency, accessibility, and empowerment. Our mission is to provide users with the resources they need to take control of their financial well-being, guiding them towards a more secure and prosperous future.</p>
        <p className="text-gray-600">Join us on this journey towards financial empowerment. Let [Your Website Name] be your trusted partner in making smarter, more informed financial decisions.</p>
       </div>
    </div>
    <Footer/>
  </>
  )
}
