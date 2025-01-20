import {useLoaderData} from 'react-router-dom';

function About() {

  const userData = useLoaderData();

  return (<>
    {!userData && <h1>Loading.....</h1>}
    {userData && (
      <div>
        Hello {userData.name}
        <img alt="" src='https://avatars.githubusercontent.com/u/8150023?v=4'></img>
        <p>
          <button onClick={() => userData.followers = 5}>Change Folloers</button>
          You have total {userData.public_repos} repositoris and total {userData.followers} follower{userData.followers > 1 && "s"}
        </p>
      </div>
    )}
  </>)
}

export default About

export const getUserGithubInfo = async () => {
  const userInfo = await fetch("https://api.github.com/users/shradha3394");
  return userInfo.json();
}
