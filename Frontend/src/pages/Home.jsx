import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Button, theme, Avatar } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserError,
  fetchUserStart,
  fetchUserSuccess,
} from "@/redux/userSlice";
const { Header, Sider, Content } = Layout;

const Home = () => {
  const { loading, error, userList } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(fetchUserStart());
    await axios
      .post("/api/user/fetchUser")
      .then((data) => {
        dispatch(fetchUserSuccess(data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUserError(error?.response?.data));
      });
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedUser, setSelectedUser] = useState(null);
  const handleClick = (data) => {
    setSelectedUser(data.username);
  };

  return (
    <Layout>
      <Sider
        className="h-screen"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical m-10" />
        <div>
          {userList?.map((data) => (
            <div
            key={data.username}
            className={`w-full h-10 flex items-center justify-evenly my-3 rounded-lg cursor-pointer ${
              selectedUser === data.username ? 'bg-blue-400' : ''
            }`}
            onClick={() => handleClick(data)}
          >
              <Avatar size={32} icon={<UserOutlined />} />
              <h1 className="text-white">{data.username}</h1>
            </div>
          ))}
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
