import './footer.style.scss';

const footerComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer-text'>Made by Tir Mohamed Mehdi</p>
      <p className='footer-text'>All right are reserved {year} ©</p>
    </footer>
  );
};

export default footerComponent;
