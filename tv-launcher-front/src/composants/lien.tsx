import {Col, Card} from 'react-bootstrap';

interface LienProp {
    titre: string;
    url: string;
    image: string;
}

export default function Lien(prop: LienProp) {
    return (
        <Col>
            <a href={prop.url}>
                <Card style={{height: "22.5vh"}}>
                    <div className="image" id={prop.titre} style={{backgroundImage: 'url(./' + prop.image + '.png)'}}></div>
                </Card>
                <h5>{prop.titre}</h5>
            </a>
        </Col>
    );
  }
  