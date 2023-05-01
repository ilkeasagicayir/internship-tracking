import CompanyNavbar from "../../components/navbar/CompanyNavbar";
import { Table } from "antd";

const Application = () => {
  const columns = [
    {
      title: " Internship Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number of Applicants",
      dataIndex: "age",
      key: "age",
    },
    {
      dataIndex: "",
      key: "x",
      render: () => <a>Edit</a>,
    },
    {
      dataIndex: "",
      key: "y",
      render: () => <a>Delete</a>,
    },
    {
        dataIndex: "",
        key: "y",
        render: () => <a>View Applicants</a>,
      },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
    },
  ];

  return (
    <>
      <CompanyNavbar />
      <div className="px-6 py-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Internship Applications
        </h1>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default Application;
