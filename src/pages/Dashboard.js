import { Content } from 'antd/lib/layout/layout';

export default function Dashboard()
{
	return (
		<Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Hello
        </Content>
	);
};