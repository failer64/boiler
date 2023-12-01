import React, { useEffect, useState } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProfile from './EditProfile';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import axios from 'axios';
import utils from 'utils';
const defaultAvatarUrl = '/img/avatars/thumb-1.jpg';


export function UserList() {

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [userProfileVisible, setUserProfileVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	async function fetchUsers() {
		setLoading(true);
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/users');
			if (res.status === 200) {
				setUsers(res.data);
			}
		} catch (error) {
			console.error(error.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers();
	}, [])

	const deleteUser = (userId) => {
		setUsers(prev => prev.filter(item => item.id !== userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = (userInfo) => {
		setUserProfileVisible(true);
		setSelectedUser(userInfo);
	};

	const closeUserProfile = () => {
		setSelectedUser(null);
		setUserProfileVisible(false);
	}

	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus src={record.img || defaultAvatarUrl} name={record.name} subTitle={record.email} />
				</div>
			),
			sorter: {
				compare: (a, b) => {
					return utils.antdTableSorter(a, b, 'name');
				},
			},
		},
		{
			title: 'Role',
			dataIndex: 'role',
			render: (_, record) => (
				<span>
					{record.company.name}
				</span>
			),
			sorter: {
				compare: (a, b) => {
					return utils.antdTableSorter(a.company, b.company, 'name');
				},
			},
		},
		{
			title: 'Username',
			dataIndex: 'username',
			render: user => (
				<Tag className="text-capitalize" color={user.username === 'active' ? 'cyan' : 'red'}>
					{
						user
					}
				</Tag>
			),
			sorter: {
				compare: (a, b) => {
					return utils.antdTableSorter(a, b, 'username');
				},
			},
		},
		{
			title: 'Id',
			dataIndex: 'id',
			render: id => (
				<span>
					{id}
				</span>
			),
			sorter: {
				compare: (a, b) => {
					return utils.antdTableSorter(a, b, 'id');
				},
			}
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { showUserProfile(elm) }} size="small" />
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={() => { deleteUser(elm.id) }} size="small" />
					</Tooltip>
				</div>
			)
		}
	];

	return (
		<>
			<Card bodyStyle={{ 'padding': '0px' }}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' loading={loading} />
				{
					selectedUser &&
					<EditProfile user={selectedUser}
						updateUser={setSelectedUser} closeUserProfile={closeUserProfile} userProfileVisible={userProfileVisible} />
				}
			</Card>
		</>
	)
}

export default UserList
