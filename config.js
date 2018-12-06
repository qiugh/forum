var path = require('path');

var config = {
	// debug 为 true 时，用于本地调试
	debug: true,
	mini_assets: false, // 是否启用静态文件的合并压缩，详见视图中的Loader
	name: 'zzbond', // 社区名字
	description: 'zzbond', // 社区的描述
	keywords: 'nodejs, node, express, connect, socket.io',

	// 添加到 html head 中的信息
	site_headers: [],
	site_logo: '/public/images/cnodejs_light.svg', // default is `name`
	site_icon: '/public/images/cnode_icon_31.png', // 默认没有 favicon, 这里填写网址
	// 右上角的导航区
	site_navs: [],
	// cdn host，如 http://cnodejs.qiniudn.com
	site_static_host: '', // 静态文件存储域名
	// 社区的域名
	host: 'localhost',
	// 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
	google_tracker_id: '',
	// 默认的cnzz tracker ID，自有站点请修改
	cnzz_tracker_id: '',
	// mongodb 配置
	db: 'mongodb://127.0.0.1/node_club_dev',
	// redis 配置，默认是本地
	redis_host: '127.0.0.1',
	redis_port: 6379,
	redis_db: 0,
	redis_password: '',
	session_secret: 'node_club_secret', // 务必修改
	auth_cookie_name: 'node_club',
	// 程序运行的端口
	port: 3000,
	// 话题列表显示的话题数量
	list_topic_count: 10,
	log_dir: path.join(__dirname, 'logs'),
	// 邮箱配置
	mail_opts: {
		host: 'smtp.126.com', port: 25,
		auth: { user: 'club@126.com', pass: 'club' },
		ignoreTLS: true,
	},
	// admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
	admins: { newman: true },
	// github 登陆的配置
	GITHUB_OAUTH: {
		clientID: 'a728c5fb6fd46c86319e',
		clientSecret: '8a813f90bd61294b138532da79026b40fc7ec1ea',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	  },
	// 是否允许直接注册（否则只能走 github 的方式）
	allow_sign_up: false,
	// oneapm 是个用来监控网站性能的服务
	oneapm_key: '',
	// 文件上传配置
	upload: {
		path: path.join(__dirname, 'public/upload/'),
		url: '/public/upload/'
	},
	file_limit: '5MB',
	tabs: [['share', '分享'], ['ask', '求助'], ['job', '招聘'],],
	create_post_per_day: 20, // 每个用户一天可以发的主题数
	create_reply_per_day: 1000, // 每个用户一天可以发的评论数
	create_user_per_ip: 1000,
	visit_per_day: 10000, // 每个 ip 每天能访问的次数
};

module.exports = config;