import AppLayout from '../../components/AppLayout';

export default function Timeline({ name }) {
  return (
    <AppLayout>
      <h1>Hello {name}</h1>
    </AppLayout>
  );
}

Timeline.getInitialProps = async () => {
  return fetch('http://localhost:3000/api/hello')
    .then((res) => res.json())
};
