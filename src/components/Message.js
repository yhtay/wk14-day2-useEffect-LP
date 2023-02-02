import { useState, useEffect } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log('Message', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    // console.log('cname: ',cname);
    setSizeClass(cname);
  }, [size])


  useEffect(()=> {
    setMessage(`This turkey has ${featherCount} feathers! So cool!`)
  },[featherCount])

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;
