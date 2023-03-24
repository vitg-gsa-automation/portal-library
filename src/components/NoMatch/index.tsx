import { Link } from 'react-router-dom';

import { Container } from '../../layouts/Container';
import { ContentLayout } from '../../layouts/ContentLayout';

export function NoMatch() {
  return (
    <ContentLayout>
      <Container style={{ padding: '3.2rem' }}>
        <h1>Nothing to see here!</h1>
        <div>
          <Link to="/login" className="link">
            Go to the login page
          </Link>
        </div>
      </Container>
    </ContentLayout>
  );
}
