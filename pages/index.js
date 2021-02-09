import Head from "next/head"
import styled from "styled-components"
const PageContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  line-height: 1.2;
  border-top: 1px solid rgb(210, 210, 210);
  border-left: 1px solid rgb(210, 210, 210);
  border-top-left-radius: 9px;
  margin-top: 6px;
  margin-left: 6px;
  min-height: 100vh;
  @media (min-width: 800px) {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`
const BgImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  overflow: visible;
  top: 0;
  z-index: -1;
  opacity: 0.06;
`
const UserHeaderContainer = styled.header`
  display: flex;
  flex-flow: wrap;
  @media (min-width: 800px) {
    display: flex;
    width: 100%;
    flex-flow: wrap;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
  }
`
const UserNameHeader = styled.h2`
  display: inline-flex;
  vertical-align: top;
`
const UserName = styled.div`
  white-space: nowrap;
`
const UserGithub = styled.a`
  margin-left: 1.5rem;
  font-weight: 400;
  &:hover {
    font-weight: 400;
    color: rgb(142, 152, 254);
    transition: all 300ms ease-in-out;
  }
`
const UserImage = styled.img`
  width: 14vw;
  display: inline-flex;
  height: auto;
  margin-bottom: 1rem;
  margin-right: 2rem;
  border-radius: 100%;
  @media (min-width: 800px) {
    width: 60px;
    margin-top: -21px;
  }
`
const UserDescriptionHeader = styled.h2`
  margin-bottom: 1rem;
  width: 100%;
`
const UserDescription = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  font-size: 12px;
  margin-bottom: 1rem;
  @media (min-width: 800px) {
    width: auto;
    margin-right: 47rem;
  }
`
const ProjectsDescription = styled.main`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`
const ProjectLink = styled.a`
  margin-top: 0.9rem;
  font-size: 13px;
  margin-bottom: 0.9rem;
  border-bottom: 1px solid rgb(210, 210, 210);
  padding-bottom: 0.3rem;
  &::before {
    color: rgb(210, 210, 210);
    content: "⇨ ";
  }
`
export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BgImg src="./bgImg.jpg" />
      <UserHeaderContainer>
        <UserImage src="./userImg.jpg" />
        <UserNameHeader>
          <UserName>Bruno Costa</UserName>
          <UserGithub href="https://github.com/ocBruno">github</UserGithub>
        </UserNameHeader>
      </UserHeaderContainer>
      <UserDescriptionHeader> Open to work </UserDescriptionHeader>
      <UserDescription>
        Professional office and remote experience with frontend web development
        using HTML5, CSS, Javascript, React and other frameworks/libraries in an
        agile team participating in daily / weekly tech meetings in English and
        Portuguese. Currently focusing on react, nextjs and react native until
        my next professional opportunity arises.
      </UserDescription>
      <ProjectsDescription>
        <h5> Check out my most recent next js project pages</h5>
        <ProjectLink
          alt="Check out my page integrated to ny api with custom hooks!"
          href="/news"
        >
          Most popular articles component integrated to NY times news api with
          custom hooks
        </ProjectLink>
        <ProjectLink
          alt="Ny times integration implemented with react query rendered on server side"
          href="/ny-times"
        >
          News page implemented with ny times api, open weather api, react query
          and server side rendering for managing server side state efficiently.
        </ProjectLink>
      </ProjectsDescription>
    </PageContainer>
  )
}
