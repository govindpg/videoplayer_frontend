import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Row, Col } from "react-bootstrap";
import { getALLVides } from "../services/allAPI";

export default function View({ uploadVideos }) {
  const [video, setVideo] = useState([]);
  const[deletestaus,setDeletestatus]=useState(true)

  const getAllUploadVideos = async () => {
    const response = await getALLVides();
    const { data } = response;
    setVideo(data);
  };
  console.log(video);
  useEffect(() => {
    getAllUploadVideos();
    setDeletestatus(false)
  }, [uploadVideos,deletestaus]);
  return (
    <>
      <Row>
        <h3>ALl Videos</h3>
        {video.length > 0 ? (
          video.map((allvideo) => (
            <Col className="gap-4 ms-4" sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayvideo={allvideo} deletevid={setDeletestatus} />
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}
