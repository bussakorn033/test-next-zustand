const authStore = () => ({
	isAuthenticated: true,
	accessToken: 'accessToken',
	refreshToken: 'refreshToken',
	roleName: 'ONEAPP_ADM',
	rbacData: [
		{
			form_id: 1,
			form_name: 'All Task',
			widget_id: 1,
			widget_name: 'All Task Screen',
			widget_type: 'S',
			widget_state: 2
		},
		{
			form_id: 2,
			form_name: 'All Task',
			widget_id: 2,
			widget_name: 'All Task Field',
			widget_type: 'F',
			widget_state: 2
		}
	],
	username: 'name'
});

export default authStore;
