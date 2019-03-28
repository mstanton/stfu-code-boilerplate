import React, { PureComponent } from 'react';
import './header.scss';

export default class Header extends PureComponent {
	render() {
		return (
			<header>
				<div>
					<span><img src="http://i.pravatar.cc/300"/></span>
					<ul>
						<li>Account</li>
						<li>Login</li>
						<li>Logout</li>
					</ul>
				</div>
				<h1>Header</h1>
			</header>
		);
	}
}
