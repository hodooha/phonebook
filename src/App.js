import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./component/Title";
import Createform from "./component/Createform";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Searchform from "./component/Searchform";
import PhoneList from "./component/PhoneList";

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 보인다.
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 이름으로 유저를 검색할 수 있다.

function App() {
  return (
    <div>
      <Title></Title>
      <Container>
        <Row>
          <Col className="left">
            <Createform></Createform>
          </Col>
          <Col className="right">
            <Searchform />
            <PhoneList></PhoneList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
