import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import styles from "./PostGrid.module.css";

const PostGrid: React.FC<{}> = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_) => (
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="fs-4">Blog Title</Card.Title>
              <Card.Text className={`${styles.CardText} truncate-line-clamp`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                mollis finibus nulla, ac consectetur neque molestie eget. Donec
                ut orci id urna finibus consequat quis et dolor. Sed finibus
                ornare mauris a consectetur. Aenean et mi convallis, vehicula
                risus ac, dignissim ex. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nunc consequat orci elit. Ut elementum
                non metus in pulvinar. Vestibulum lacinia, est in gravida
                elementum, erat justo suscipit mi, in blandit tortor erat vitae
                purus. Sed mauris enim, tristique non lectus in, ornare ornare
                enim. Vestibulum fermentum lacus sed efficitur elementum.
                Vestibulum scelerisque tristique urna. Nullam tortor enim,
                faucibus nec sodales at, porttitor ac augue. Vestibulum vehicula
                volutpat lorem, nec finibus tellus ullamcorper et. Fusce
                pulvinar tristique cursus. Donec eget nisl eu lorem aliquam
              </Card.Text>
              <Link to="/blog" className={`${styles.Link} text-muted mb-0}`}>
                Continue reading...
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;
