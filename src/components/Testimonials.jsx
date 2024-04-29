import React from 'react'
import './Testimonials.css'
export default function Testimonials() {

    const Reviews = [
        {
          name: "John Doe",
          designation: "Software Engineer",
          review: "I've been using this expense tracking app for a few months now, and it has completely transformed the way I manage my finances. It's intuitive, easy to use, and helps me stay on top of my expenses effortlessly.",
          src:"https://i.pinimg.com/564x/3b/4d/08/3b4d0835896bb79bb6cc54ab8c5b9298.jpg"
        },
        {
          name: "Alice Smith",
          designation: "Marketing Manager",
          review: "As a marketing manager, I need to keep track of various expenses for campaigns and events. This app has been a lifesaver for me. It's user-friendly interface and comprehensive features make expense tracking a breeze.",
          src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOr9b3irvA3FAVQLg97deCFy6pr4QhBWkWe6c8hlGEl1HuXKRYB4W_towiSfbBn1piDA&usqp=CAU"
        },
        {
          name: "Bob Johnson",
          designation: "Freelance Writer",
          review: "I've tried several expense tracking apps in the past, but none of them compare to this one. It's simple yet powerful, and it's helped me gain better control over my finances. Highly recommended!",
          src:"https://static.dezeen.com/uploads/2017/07/apple-announces-new-emojis-design-news_dezeen_2364_col_1.jpg"
        },
        {
          name: "Emily Wilson",
          designation: "Small Business Owner",
          review: "Managing expenses for my small business used to be a hassle, but not anymore. This app simplifies the process and provides valuable insights into my spending patterns. It's a must-have tool for any business owner.",
          src:"https://i.pinimg.com/474x/f6/aa/e9/f6aae98da3645817d151257652f57818.jpg"
        },
        {
          name: "Michael Lee",
          designation: "Student",
          review: "Being a student, I have to manage my expenses carefully. This app has been incredibly helpful in keeping track of my spending and budgeting effectively. It's convenient to use and has made a real difference in my financial management.",
          src:"https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp"
        },
        {
          name: "Sophia Brown",
          designation: "Consultant",
          review: "I recommend this expense tracking app to all my clients. It's reliable, feature-rich, and customizable to fit individual needs. Whether you're a freelancer, small business owner, or just want to keep track of personal expenses, this app has you covered.",
          src:"https://i.pinimg.com/474x/74/9d/eb/749deb654e80d0dfb1346e772ae49711.jpg"
        },
        {
          name: "David Martinez",
          designation: "Accountant",
          review: "As an accountant, accuracy and efficiency are crucial when it comes to managing expenses. This app meets both criteria and more. It streamlines the expense tracking process and provides insightful reports that help me advise my clients better.",
          src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_CWkpedwNma5iO2tk3F9oOlil5vVR4Ysg8rJOMXC6nb8vAa_6MEEQyOOxMd6ax4Eb64&usqp=CAU"
        },
        {
          name: "Jennifer Nguyen",
          designation: "Project Manager",
          review: "I've used various expense tracking apps throughout my career, but this one stands out for its simplicity and effectiveness. It's easy to set up, easy to use, and provides all the features I need to manage project expenses efficiently.",
          src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKH21UNqpQxNWeACqeHP0cLuVwGfFJX9MX9OFBCWyZAzoSyB5UQ9rbXqDbjZIn1yBRM-U&usqp=CAU"
        },
        {
          name: "Daniel Taylor",
          designation: "Entrepreneur",
          review: "This app has been instrumental in helping me keep track of expenses for multiple projects and ventures. It's versatile, intuitive, and saves me a significant amount of time that I can now allocate to growing my business.",
          src:"https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
        },
        {
          name: "Emma Clark",
          designation: "Stay-at-home Parent",
          review: "Even as a stay-at-home parent, managing household expenses can be challenging. This app has made it much easier for me to track spending, set budgets, and save money for future expenses. It's become an essential tool in managing our family finances.",
          src:"https://cdn.vox-cdn.com/thumbor/6S_BERxoDvfZqF05MW_gEiIpewk=/0x0:1033x689/1400x1400/filters:focal(517x345:518x346)/cdn.vox-cdn.com/uploads/chorus_asset/file/11701871/ive.pngg"
        }
      ];
      


  return (
    <div className='Testimonials'>
        <h3>Testimonials</h3>
        <h1>What Do Our Customers Say?</h1>
        <p>Discover firsthand experiences shared by our valued customers. Hear their stories, testimonials, and feedback that shed light on their journey with us.</p>
        <div className="customerReviewsContainer">
  <div className="customerReviews">
    {Reviews.map((review, index) => (
      <div className="review-card" key={index}>
        <div className="review">{review.review}</div>
        <img src={review.src}></img>
        <div className="author">
          <div className="name">{review.name}</div>
          <div className="designation">{review.designation}</div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}
