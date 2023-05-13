import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="main_container">
        <div className="first_container">
          <div className="title">ABOUT</div>
          <a href="/contact">Contact Us</a>
          <a href="/contact">About Us</a>
          <a href="/contact">Careers</a>
          <a href="/contact">Coporate Information</a>
        </div>
        <div className="second_container">
          <div className="title">HELP</div>
          <a href="/contact">Payments</a>
          <a href="/contact">Shipping</a>
          <a href="/contact">Cancellation & Returns</a>
          <a href="/contact">FAQ</a>
        </div>
        <div className="third_container">
          <div className="title">POLICY</div>
          <a href="/contact">Return Policy</a>
          <a href="/contact">Terms of Use</a>
          <a href="/contact">Security</a>
        </div>
        <div className="forth_container">
          <div className="title">SOCIAL</div>
          <a href="/contact">Facebook</a>
          <a href="/contact">Twiter</a>
          <a href="/contact">Instagram</a>
        </div>
        <div className="fifth_container">
          <div className="fifth_one_container">
            <div className="fifth_one_in_container">
              <div className="title">MAIL US</div>
              <a href="/contact">exaple@gmail.com</a>
            </div>
          </div>
          <div className="fifth_second_container">
            <div className="title">Registered Office Address:</div>
            <a href="/contact">TelePhone:1234567890</a>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="bottom_footer_container">
          <div>Become a Seller</div>
          <div>Advertise</div>
          <div>Gift Cards</div>
          <div>Help Center</div>
          <div>©2022-2023 Ecommerce.com</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
