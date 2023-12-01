import { Form, Avatar, Button, Input, Row, Col, message, Upload, Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { useState } from 'react';

const avatarEndpoint = 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188';
const defaultAvatarUrl = '/img/avatars/thumb-6.jpg';

export const EditProfile = (
	{ user, updateUser, userProfileVisible, closeUserProfile }
) => {

	const [isFetching, setIsFetching] = useState(false);

	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	const onFinish = values => {
		setIsFetching(true);
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });
		setTimeout(() => {
			updateUser({
				...user,
				name: values.name,
				email: values.email,
				username: values.username,
				website: values.website,
				phone: values.phoneNumber,
				company: {
					...user.company,
					name: values.role
				},
				address: {
					...user.address,
					zipcode: values.postcode,
					city: values.city,
				},
			})
			message.success({ content: 'Done!', key, duration: 2 });
			setIsFetching(false)
			closeUserProfile();
		}, 1000);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const onUploadAavater = (info) => {
		const key = 'updatable';
		if (info.file.status === 'uploading') {
			message.loading({ content: 'Uploading...', key, duration: 1000 });
			return;
		}
		getBase64(info.file.originFileObj, imageUrl =>
			updateUser({ ...user, avatarUrl: imageUrl })
		);
		message.success({ content: 'Uploaded!', key, duration: 1.5 });
	};

	const onRemoveAvater = () => {
		updateUser({ ...user, avatarUrl: '' });
		//avatar = '';
	}

	return (
		<Drawer
			width={500}
			placement="right"
			visible={userProfileVisible}
			onClose={closeUserProfile}
			closable={false}
		>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
				<Avatar size={90} src={user.avatarUrl || defaultAvatarUrl} icon={<UserOutlined />} />
				<div className="ml-md-3 mt-md-0 mt-3">
					<Upload onChange={onUploadAavater} accept='image/*'
						showUploadList={false} action={avatarEndpoint}>
						<Button type="primary">Change Avatar</Button>
					</Upload>
					<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
				</div>
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{
							'name': user.name,
							'email': user.email,
							'username': user.username,
							'role': user.company.name,
							'phoneNumber': user.phone,
							'website': user.website,
							'street': user.address.street,
							'city': user.address.city,
							'postcode': user.address.zipcode
						}
					}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										shouldUpdate
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[{
											required: true,
											type: 'email',
											message: 'Please enter a valid email!'
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Role"
										name="role"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Phone Number"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Website"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="Street"
										name="street"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="City"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Post code"
										name="postcode"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button
								disabled={isFetching}
								type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</Drawer>
	)
}

export default EditProfile
