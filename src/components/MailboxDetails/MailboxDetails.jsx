import { useParams } from 'react-router-dom';
const MailboxDetail = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === parseInt(mailboxId));

    if (!selectedBox) {
        return <p>Mailbox not found</p>;
    }

  return (
      <main>
          <h1>{selectedBox.boxOwner}</h1>
          <h2>Mailboxes</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
            {mailboxes.map((mailbox) => (
              <li key={mailbox._id}>
                <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxOwner}</Link>
              </li>
            ))}
          </ul>
      </main>
  );
};

export default MailboxDetail;