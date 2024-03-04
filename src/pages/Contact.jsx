import { Card } from 'primereact/card';
import Logo from '../assets/logo.webp';

const Contact = () => {
  return (
    <div className="flex justify-content-center">
      <Card
        className="flex flex-column shadow-lg" // Add shadow effect
        style={{
          width: '350px', // Slightly wider card
          margin: '20px auto', // Increase vertical and horizontal spacing
          borderRadius: '8px', // Rounded corners
          backgroundColor: '#f2f2f2', // Lighter background
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <img src={Logo} alt="Contact Information" className="logoo" style={{ maxWidth: '250px', margin: '0' }} />
        </div>
        <div style={{ alignSelf: 'center', textAlign: 'center', padding: '15px' }}>
          <h1 style={{ color: '#333', fontFamily: 'Roboto', fontSize: '34px', fontWeight: 'bold' }}>İletişim</h1>
          <br />
          <p style={{ color: '#666', fontSize: '16px' }}>Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz:</p>
          <ul style={{ padding: '0', listStyle: 'none' }}> 
            <li style={{ marginBottom: '10px' }}>
              <span style={{ color: '#444', fontSize: '18px', fontWeight: 'bold' }}>E-posta:</span> info@example.com
            </li>
            <li style={{ marginBottom: '10px' }}>
              <span style={{ color: '#444', fontSize: '18px', fontWeight: 'bold' }}>Telefon:</span> +90 123 456 7890
            </li>
            <li>
              <span style={{ color: '#444', fontSize: '18px', fontWeight: 'bold' }}>Adres:</span> ...
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
