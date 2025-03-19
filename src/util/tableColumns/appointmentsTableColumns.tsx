import { Tag } from "antd";

export const AppointmentsTableColumns = [
  {
    title: "Doctor Name",
    dataIndex: "doctorName",
    key: "doctorName",
    ellipsis: true,
  },
  {
    title: "Appointment Date",
    dataIndex: "appDate",
    key: "appDate",
    ellipsis: true,
  },
  {
    title: "Appointment Time",
    dataIndex: "appTime",
    key: "appTime",
    ellipsis: true,
  },

  {
    title: "Hospital Address",
    dataIndex: "address",
    key: "address",
    ellipsis: true,
  },
  {
    title: "Appointment Status",
    dataIndex: "status",
    key: "status",
    ellipsis: true,
    render: (status: string) => (
      <Tag
        color={
          status === "PENDING"
            ? "warning"
            : status === "APPROVED"
            ? "green"
            : status === "REJECTED"
            ? "red"
            : "none"
        }
      >
        {status ? status : "none"}
      </Tag>
    ),
  },
];
