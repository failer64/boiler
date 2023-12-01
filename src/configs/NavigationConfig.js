import {
	DashboardOutlined,
	FileTextOutlined,
	ShoppingOutlined,
	MailOutlined,
	ShoppingCartOutlined,
	MobileOutlined,
	UserOutlined,
	GiftOutlined,
	PictureOutlined,
	ShopOutlined,
	TeamOutlined,
	SettingOutlined,
	ContactsOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const commonNavTree = [{
	key: 'apps',
	path: `${APP_PREFIX_PATH}/apps`,
	title: 'sidenav.apps',
	icon: '',
	breadcrumb: false,
	submenu: [
		{
			key: 'apps-dashboard',
			path: `${APP_PREFIX_PATH}/apps/dashboard`,
			title: 'sidenav.dashboard',
			icon: DashboardOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-planner',
			path: `${APP_PREFIX_PATH}/apps/calendar`,
			title: 'sidenav.apps.calendar',
			icon: ContactsOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-catalog',
			path: `${APP_PREFIX_PATH}/apps/catalog`,
			title: 'sidenav.pages.catalog',
			icon: ShoppingCartOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'apps-catalog-products',
					path: `${APP_PREFIX_PATH}/apps/catalog/products`,
					title: 'sidenav.apps.ecommerce.product',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
				{
					key: 'apps-catalog-categories',
					path: `${APP_PREFIX_PATH}/apps/catalog/categories`,
					title: 'sidenav.apps.ecommerce.productList',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
				{
					key: 'apps-catalog-collections',
					path: `${APP_PREFIX_PATH}/apps/catalog/collections`,
					title: 'sidenav.collections',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
				{
					key: 'apps-catalog-combo',
					path: `${APP_PREFIX_PATH}/apps/catalog/combo`,
					title: 'sidenav.combo',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
			]
		},
		{
			key: 'apps-orders',
			path: `${APP_PREFIX_PATH}/apps/orders`,
			title: 'sidenav.apps.ecommerce.orders',
			icon: ShoppingOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-userlist',
			path: `${APP_PREFIX_PATH}/apps/userlist`,
			title: 'sidenav.pages.userlist',
			icon: UserOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'apps-userlist-s-list',
					path: `${APP_PREFIX_PATH}/apps/userlist/clients/list`,
					title: 'sidenav.pages.userlist.list',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
				{
					key: 'apps-userlist-clients-groups',
					path: `${APP_PREFIX_PATH}/apps/userlist/clients/groups`,
					title: 'sidenav.pages.userlist.group',
					icon: '',
					breadcrumb: false,
					submenu: []
				}
			]
		},
		{
			key: 'apps-components',
			path: `${APP_PREFIX_PATH}/apps/components`,
			title: 'sidenav.components',
			icon: PictureOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-sales',
			path: `${APP_PREFIX_PATH}/apps/sales`,
			title: 'sidenav.dashboard.sales',
			icon: GiftOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-location',
			path: `${APP_PREFIX_PATH}/apps/location`,
			title: 'sidenav.maps',
			icon: ShopOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'apps-location-adress',
					path: `${APP_PREFIX_PATH}/apps/location/adress`,
					title: 'sidenav.maps.google',
					icon: '',
					breadcrumb: false,
					submenu: []
				},
				{
					key: 'apps-location-geo',
					path: `${APP_PREFIX_PATH}/apps/location/geo`,
					title: 'sidenav.maps.simple',
					icon: '',
					breadcrumb: false,
					submenu: []
				}
			]
		},
		{
			key: 'apps-staff',
			path: `${APP_PREFIX_PATH}/apps/staff`,
			title: 'sidenav.staff',
			icon: TeamOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'apps-mail',
			path: `${APP_PREFIX_PATH}/apps/mail`,
			title: 'sidenav.apps.mail',
			icon: MailOutlined,
			breadcrumb: false,
			submenu: []
		},
	]
}]

const generalNavTree = [{
	key: 'general',
	path: `${APP_PREFIX_PATH}/general`,
	title: 'sidenav.components.general',
	icon: '',
	breadcrumb: false,
	submenu: [
		{
			key: 'general-settings',
			path: `${APP_PREFIX_PATH}/general/settings`,
			title: 'sidenav.pages.setting',
			icon: SettingOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'general-mobile-app',
			path: `${APP_PREFIX_PATH}/general/mobile/app`,
			title: 'sidenav.app.mobile',
			icon: MobileOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'general-logs',
			path: `${APP_PREFIX_PATH}/general/logs`,
			title: 'sidenav.docs.changelog',
			icon: FileTextOutlined,
			breadcrumb: false,
			submenu: []
		},
	]
}]

const navigationConfig = [
	...commonNavTree,
	...generalNavTree
]

export default navigationConfig;
