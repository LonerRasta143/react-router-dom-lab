import {Link} from 'react-router-dom';


const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h2>Mailboxes</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className='mail-box'>
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxOwner}</Link>
          </li>
        ))}
      </ul>
      </main>
  );
};

export default MailboxList;