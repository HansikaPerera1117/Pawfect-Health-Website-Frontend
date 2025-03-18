import { Button, Card, Col, Popconfirm, Popover, Tooltip } from "antd";
import React from "react";
import { MoreVertical } from "react-feather";
import { Meta, useNavigate } from "react-router-dom";

export const AppointmentCard = () => {
  const history = useNavigate();
  const content = (
    <div className="d-flex flex-column">
      <Popconfirm
        className="d-flex justify-content-center"
        title="Approve appointment"
        description="Are you sure to approve this appointment?"
        // onConfirm={() => {
        //   confirm(unit);
        // }}
        okText="Yes"
        cancelText="No"
      >
        {" "}
        <Button className="menu-view-btn my-3" type="primary">
          Approve
        </Button>
      </Popconfirm>
      <Popconfirm
        className="d-flex justify-content-center"
        title="Reject appointment"
        description="Are you sure to reject this appointment?"
        // onConfirm={() => {
        //   confirm(unit);
        // }}
        okText="Yes"
        cancelText="No"
      >
        {" "}
        <Button className="menu-view-btn" type="primary" danger>
          Reject
        </Button>
      </Popconfirm>
    </div>
  );

  return (
    <Card hoverable style={{ width: "100% ", borderLeft: "5px solid #6baed6" }}>
      {" "}
      <div>
        <div>
          <h6 className="product-sub-title text-truncate d-flex">
            <Tooltip title={"productData?.brandName"}>
              Name : {"productData?.brandName"}
            </Tooltip>
          </h6>

          <h6 className="product-title text-truncate">
            <Tooltip title={"productData"}>
              Contact No : {"productData"}{" "}
            </Tooltip>
          </h6>

          <h6 className="product-title text-truncate">
            <Tooltip title={"productData"}> Dog Sickness :</Tooltip>
          </h6>
          <h6 className="product-title text-truncate">
            <Tooltip title={"productData"}> Date :</Tooltip>
          </h6>
          <h6 className="product-title text-truncate">
            <Tooltip title={"productData"}> Time :</Tooltip>
          </h6>
        </div>
        <div
          className="position-absolute bg-white rounded-5 p-2"
          style={{ bottom: 10, right: 20 }}
        >
          {" "}
          <Popover placement="rightBottom" content={content}>
            <MoreVertical
              color="#332321"
              size={30}
              className="rounded-5 p-1"
              style={{ backgroundColor: "#6baed6" }}
            />
          </Popover>
        </div>
      </div>
    </Card>
  );
};
