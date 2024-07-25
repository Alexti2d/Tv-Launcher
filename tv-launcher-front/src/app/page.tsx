import Lien from '../composants/lien';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import "./launcher.css";
export default function Home() {
  
  getData()
  
  return (
    <main>
      {/* <iframe src="./background/synthwave/index.html"></iframe> */}
    <h1 className="text-center mt-5 mb-5">Titre</h1>
    <Container fluid>
        <Row className="mx-auto text-center">
            <Lien titre="Test" image="Test_Icone_NOIR_EXE" url="https://www.myelectricnetwork.fr/group/home-distribution"/>
            <Lien titre="Test" image="Test_Icone_NOIR_EXE" url="https://www.myelectricnetwork.fr/group/home-distribution"/>
            <Lien titre="Test" image="Test_Icone_NOIR_EXE" url="https://www.myelectricnetwork.fr/group/home-distribution"/>
        </Row>
    </Container>
    </main>
  );
}

function getData() {
  fetch("http://localhost:4000/liens", {
    method: "GET",
    redirect: "follow"
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
