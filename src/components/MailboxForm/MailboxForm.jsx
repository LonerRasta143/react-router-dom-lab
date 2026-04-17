import { useState } from "react";

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input 
          id="boxOwner"
          type="text" 
          value={boxOwner} 
          onChange={(e) => setBoxOwner(e.target.value)} 
          required 
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select id="boxSize" value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;