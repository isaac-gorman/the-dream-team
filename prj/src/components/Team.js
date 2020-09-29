import React, { useState } from "react";
import github from "./assest/github.svg";
import styled from "styled-components";
import teamData from "../data/teamData";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: blue;
  // align-items: flex-end;
`;

const Heading = styled.h3`
  font-size: 18px;
  font-family: "product_sansbold";
  // font-style: normal;
  // font-weight: normal;
  margin-left: 6px;
  text-align: left;
  width: 360px;
`;

const Card = styled.div`
  width: 360px;
  height: 380px;
  background: white;
  border: 0.1px solid #e6e6e6;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  &:hover {
    border: none;
    // -ms-transform: scale(1.025); /* IE 9 */
    // -webkit-transform: scale(1.025); /* Safari 3-8 */
    transform: scale(1.025);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background-color: #f6f8fa;
  }
`;

const TitleDiv = styled.div`
  height: 60px;
  width: 90%;
  // background: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const InfoDiv = styled.div`
  height: 40px;
  width: 70%;
  // background: green;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Responsibility = styled.h4`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: bold;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #282c34;
`;

const Name = styled.p`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #282c34;
`;

const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
  // color: lightblue;
  border-radius: 40px;
  // border: 0.25px solid black;
  // background-color: blue;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: center;
  // border-radius: 40px;
  // background: black;
  // fill: white;
`;

const DetailsDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  // background: lightblue;
`;

const RoleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // background: orange;
`;
const RoleDiv = styled.div`
  display: flex;
`;

const Role = styled.h3`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  color: #282c34;
`;

const RoleName = styled.p`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #282c34;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DirectionsTitle = styled.h3`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const Directions = styled.p`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  color: #282c34;
`;

const EmailIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 14px;
`;

const Email = styled.p`
  font-size: 14px;
  font-family: "product_sansregular";
  font-style: normal;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: underline;
  color: #282c34;
`;

const PreviewCard = styled.div`
  width: 360px;
  height: 120px;
  // background: pink;
  border: 0.1px solid #e6e6e6;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-bottom: 20px;
  transition: transform 0.2s;
  &:hover {
    border: none;
    // -ms-transform: scale(1.025); /* IE 9 */
    // -webkit-transform: scale(1.025); /* Safari 3-8 */
    transform: scale(1.025);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background-color: #f6f8fa;
  }
`;

const PreviewTitleDiv = styled.div`
  height: 60px;
  width: 90%;
  // background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 30px;
`;

function Team() {
  const [activeCorie, setActiveCorie] = useState(false);
  const [activeShawn, setActiveShawn] = useState(false);
  const [activeAndrew, setActiveAndrew] = useState(false);
  const [activeChris, setActiveChris] = useState(false);
  const [activeAlec, setActiveAlec] = useState(false);
  const [activeWild, setActiveWild] = useState(false);
  const [activeIsaac, setActiveIsaac] = useState(false);

  return (
    <Container>
      <Heading>Team Members</Heading>
      {activeCorie ? (
        <Card onClick={() => setActiveCorie(!activeCorie)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.corie.name}</Responsibility>
              <Name>{teamData.corie.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.corie.image} alt="Tresurer corie " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.corie.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.corie.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.corie.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveCorie(!activeCorie)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.corie.name}</Responsibility>
              <Name>{teamData.corie.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.corie.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {activeShawn ? (
        <Card onClick={() => setActiveShawn(!activeShawn)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.shawn.name}</Responsibility>
              <Name>{teamData.shawn.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.shawn.image} alt="Tresurer shawn " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.shawn.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.shawn.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.shawn.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveShawn(!activeShawn)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.shawn.name}</Responsibility>
              <Name>{teamData.shawn.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.shawn.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {activeAndrew ? (
        <Card onClick={() => setActiveAndrew(!activeAndrew)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.andrew.name}</Responsibility>
              <Name>{teamData.andrew.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.andrew.image} alt="Tresurer andrew " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.andrew.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.andrew.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.andrew.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveAndrew(!activeAndrew)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.andrew.name}</Responsibility>
              <Name>{teamData.andrew.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.andrew.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {activeChris ? (
        <Card onClick={() => setActiveChris(!activeChris)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.chris.name}</Responsibility>
              <Name>{teamData.chris.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.chris.image} alt="Tresurer chris " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.chris.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.chris.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.chris.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveChris(!activeChris)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.chris.name}</Responsibility>
              <Name>{teamData.chris.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.chris.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {activeAlec ? (
        <Card onClick={() => setActiveAlec(!activeAlec)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.alec.name}</Responsibility>
              <Name>{teamData.alec.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.alec.image} alt="Tresurer alec " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.alec.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.alec.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.alec.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveAlec(!activeAlec)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.alec.name}</Responsibility>
              <Name>{teamData.alec.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.alec.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {activeWild ? (
        <Card onClick={() => setActiveWild(!activeWild)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.wild.name}</Responsibility>
              <Name>{teamData.wild.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.wild.image} alt="Tresurer wild " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.wild.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.wild.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.wild.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveWild(!activeWild)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.wild.name}</Responsibility>
              <Name>{teamData.wild.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.wild.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {/* ------------------------------------------------------------- */}
      {activeIsaac ? (
        <Card onClick={() => setActiveIsaac(!activeIsaac)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.isaac.name}</Responsibility>
              <Name>{teamData.isaac.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.isaac.image} alt="Tresurer isaac " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{teamData.isaac.sprint_role}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>About Me</DirectionsTitle>
              <Directions>{teamData.isaac.bio}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={github} alt="github icon" />
              <Email>{teamData.isaac.github}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveIsaac(!activeIsaac)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{teamData.isaac.name}</Responsibility>
              <Name>{teamData.isaac.unit}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={teamData.isaac.image} alt="icon" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
    </Container>
  );
}

export default Team;
