import React from 'react';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
	render() {
		return (
			<div>
				<Sidebar {...this.props} />
				<div className="content">
					<div className="content__inner">
						<div className="page">
							<h1 className="page__title">NOT FOUND</h1>
							<div className="page__body">
								<img style={{ width: '100%' }} src="404.png" alt={'페이지가 없습니다.'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NotFoundRoute;

export const pageQuery = graphql`
  	query NotFoundQuery {
    	site {
      		siteMetadata {
        		title
        		subtitle
        		copyright
        		menu {
          			label
          			path
        		}
        		author {
          			name
          			email
          			telegram
          			twitter
          			github
          			rss
          			vk
        		}
      		}
    	}
  	}`;
