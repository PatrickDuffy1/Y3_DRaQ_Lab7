import Card from 'react-bootstrap/Card';

function BooksItem(props)
{
    return(

        <div>
            <center>
            {/* Display Book as card */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.myBook.cover} /> {/* Display book image */}
                <Card.Body>
                    <Card.Title>{props.myBook.title}</Card.Title> {/* Display book title */}
                    <Card.Text>{props.myBook.author}</Card.Text> {/* Display one book author */}
                </Card.Body>
            </Card>
            </center>
        </div>
    );
}

export default BooksItem;