// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className=" fixed bottom-0 w-full shadow-3xl flex flex-wrap justify-center items-center   bg-gray-200 py-5 px-3 rounded-md ">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a className="font-bold px-3"
          href="https://www.linkedin.com/in/webdevkhushboo/"
          target="_blank"
          title="khushboo k linkedin Profile "
        >
          khushboo K
        </a>
        <i className="fa-solid fa-copyright"></i>
          {year}
          <strong className="px-3">
            Yummy<span>Food</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;