import { useState } from "react";
import{ Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const navigate = useNavigate();
  const addMailbox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData]);
    navigate("/mailboxes");
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Mailbox App</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/new" element={<MailboxForm addBox={addMailbox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />

      </Routes>
    </>
  );
};

export default App;
