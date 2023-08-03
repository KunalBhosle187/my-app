export async function getServerSideProps(context) {
  context.res.setHeader("Set-Cookie", "myCookie=test; path=/");

  return {
    props: {},
  };
}
const About = () => {
  return <div>About Page</div>;
};

export default About;
