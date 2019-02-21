import React from 'react';

const ContactInfo = () => (
	<ul className="contact-info page-header__contact-info">
		<li className="contact-info__item">
			<a
				className="link"
				href="mailto:nathan@nathanmweller.com?subject=Reaching%20Out"
			>
				<i className="fa fa-envelope-o" />
			</a>
		</li>
		<li className="contact-info__item">
			<a
				className="link"
				href="https://www.linkedin.com/pub/nathan-weller/52/b05/552"
			>
				<i className="fa fa-linkedin" />
			</a>
		</li>
		<li className="contact-info__item">
			<a className="link" href="https://twitter.com/nkas17_m">
				<i className="fa fa-twitter" />
			</a>
		</li>
		<li className="contact-info__item">
			<a
				className="link"
				href="https://plus.google.com/u/0/100022763393186980494/posts/p/pub"
			>
				<i className="fa fa-google-plus" />
			</a>
		</li>
		<li className="contact-info__item">
			<a className="link" href="https://www.facebook.com/nathan.weller.9">
				<i className="fa fa-facebook" />
			</a>
		</li>
		<li className="contact-info__item">
			<a className="link" href="tel:6168430170">
				<i className="fa fa-phone" />
			</a>
		</li>
		<li className="contact-info__item">
			<a className="link" href="sms:6168430170">
				<i className="fa fa-comment-o" />
			</a>
		</li>
	</ul>
);

export default ContactInfo;
