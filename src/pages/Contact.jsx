import { Card } from 'primereact/card';
import { Image } from 'primereact/image';


const Contact = () => {
    return (
      <Card className="iletisim" >    
        <h1>İletişim</h1>
        <br></br>
        <p>Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz:</p>
        <ul>
          <li>E-posta: info@example.com</li>
          <li>Telefon: +90 123 456 7890</li>
          <li>Adres: ...</li>
        </ul>
      </Card>
    );
  };
  
  export default Contact;
  