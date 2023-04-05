
import emailjs from 'emailjs-com';

export default function Emailkey(){
  const publicKEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
  emailjs.init(publicKEY);

  
    <script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  

}